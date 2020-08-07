import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { useUploadFile, TemporalFile } from '../hooks';
import { CreateFileDocument } from '../generated';

const UploadFile = ({ file }: { file: TemporalFile }) => {
  const { data, loading, error } = useUploadFile(file);
  return (
    <div data-testid="upload">
      <div data-testid="data">{JSON.stringify(data)}</div>
      {loading && <div data-testid="loading">loading</div>}
      {error &&
        error.map((err) => (
          <span title="error" key={err}>
            {err}
          </span>
        ))}
    </div>
  );
};

test('Uploads a file', async () => {
  const file = {
    filename: 'test',
    hashname: '1234567890',
    mimetype: 'text/plain',
  };
  const createFile = {
    _id: '123',
    signedUrl: 'http://test.test',
    creationDate: new Date().toString(),
    ...file,
  };
  const mocks = {
    request: { query: CreateFileDocument, variables: { file } },
    result: { data: { createFile } },
  };

  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ ok: true }) }),
  );

  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <UploadFile file={{ ...file, content: 'content text' }} />
    </MockedProvider>,
  );

  expect(screen.getByTestId('loading')).toBeInTheDocument();
  expect(screen.queryAllByTitle('error')).toHaveLength(0);

  await wait();
  expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  expect(screen.queryAllByTitle('error')).toHaveLength(0);
});
