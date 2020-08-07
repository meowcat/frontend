import React from 'react';
import { sha256 } from 'js-sha256';
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

interface FileProps {
  label: string;
  name: string;
  accept: string;
}

const FormFile = ({ label, name, accept }: FileProps) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple: false,
    onDrop: ([file]) => {
      const reader = new FileReader();
      reader.onabort = () => console.error('file reading was aborted');
      reader.onerror = () => console.error('file reading has failed');
      reader.onload = () => {
        const content = reader.result;
        const hashname = content && sha256(content);
        const { name: filename, type: mimetype } = file;
        const fileValue = { filename, hashname, mimetype, content };
        setValue(fileValue);
      };
      reader.readAsArrayBuffer(file);
    },
  });

  const hasError = touched && error;
  return (
    <div className="min-w-full pb-3">
      <label
        className="block text-sm font-medium leading-5 text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <div
        {...getRootProps({
          className: `${
            hasError ? 'border-red-600 ' : ''
          }flex justify-center w-full pr-12 border-dashed form-input pl-7 sm:text-sm sm:leading-5`,
        })}
      >
        <input {...getInputProps()} name={name} aria-label={label} />
        {value?.filename ? (
          <span className="text-sm font-medium leading-5 text-gray-800">
            {value.filename}
          </span>
        ) : (
          <span className="text-sm font-medium leading-5 text-gray-600">
            {isDragActive ? 'Drop the file here ...' : 'Drop file or click'}
          </span>
        )}
      </div>
      {hasError ? (
        <span className="block text-sm font-medium leading-5 text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormFile;
