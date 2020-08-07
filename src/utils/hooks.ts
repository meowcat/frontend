import { useEffect, useReducer } from 'react';
import { useCreateFileMutation, useFileQuery } from './generated';

export interface TemporalFile {
  filename: string;
  hashname: string;
  mimetype: string;
  content: string | ArrayBuffer;
}

function uploadReducer<T>(state: T, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'error':
      return { data: null, error: [action.payload], loading: false };
    case 'result':
      return { data: action.payload, error: null, loading: false };
    default:
      throw new Error();
  }
}

export function useUploadFile(file: TemporalFile) {
  const initialState = { data: null, loading: true, error: null };
  const [state, dispatch] = useReducer(uploadReducer, initialState);
  const [createFile] = useCreateFileMutation();

  useEffect(() => {
    async function uploadFile() {
      try {
        // Upload file metadata into the backend
        const { content, ...tempFile } = file;
        const { data, errors } = await createFile({
          variables: { file: tempFile },
        });
        if (errors) {
          dispatch({ type: 'error', payload: errors });
          return null;
        }

        // Fetch the signed URL from the response
        const url = data?.createFile?.signedUrl;
        if (!url) {
          dispatch({ type: 'error', payload: 'Empty signedUrl' });
          return null;
        }

        // Add the file to the body
        const formData = new FormData();
        formData.append(
          tempFile.hashname,
          typeof content === 'string' ? content : new Blob([content]),
        );

        // Send the file to the filesystem microservice
        const { json } = await fetch(url, { method: 'POST', body: formData });
        const response = await json();

        if (response.error) {
          dispatch({ type: 'error', payload: response.error });
        } else {
          dispatch({ type: 'result', payload: tempFile });
        }
      } catch (error) {
        dispatch({ type: 'error', payload: error });
      }
    }
    uploadFile();
  }, [file]);

  return state;
}

export function useDownloadFile(id: string) {
  const initialState = { data: null, loading: true, error: null };
  const [state, dispatch] = useReducer(uploadReducer, initialState);
  const { data, loading, error } = useFileQuery({ variables: { id } });

  // console.log({ state, query: { data, loading, error } });

  useEffect(() => {
    async function downloadFile() {
      try {
        // Fetch signed URL
        const url = data?.file?.signedUrl;
        if (!url) {
          dispatch({ type: 'error', payload: 'No signed URL provided' });
          return null;
        }

        // Send the file to the filesystem microservice
        const response = await fetch(url, { method: 'GET' });
        const json = await response.json();
        const blob = await response.blob();

        if (json.error) {
          dispatch({ type: 'error', payload: json.error });
        } else {
          const href = window.URL.createObjectURL(blob);
          const filename = data?.file?.filename;
          dispatch({ type: 'result', payload: { filename, href } });
        }
      } catch (error) {
        dispatch({ type: 'error', payload: error });
      }
    }

    if (!loading && data?.file) downloadFile();
  }, [data, loading]);

  return {
    data: state.data,
    loading: state.loading || loading,
    error: state.error || (error && [error]),
  };
}
