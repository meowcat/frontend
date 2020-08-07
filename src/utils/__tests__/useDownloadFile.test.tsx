import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { useDownloadFile } from '../hooks';
import { FileDocument } from '../generated';

const DownloadFile = ({ id }: { id: string }) => {
  const { data, loading, error } = useDownloadFile(id);
  if (error) console.error(error);
  return (
    <div data-testid="download">
      <div data-testid="data">{JSON.stringify(data)}</div>
      {loading && <div data-testid="loading">loading</div>}
      {error &&
        error.map((err, index) => (
          <span title="error" key={index}>
            {err}
          </span>
        ))}
    </div>
  );
};

test('Downloads a file', async () => {
  const id = 'test';
  const file = {
    _id: id,
    filename: 'test',
    hashname: '1234567890',
    mimetype: 'text/plain',
    signedUrl: 'http://test.test',
    creationDate: new Date().toString(),
  };
  const mocks = {
    request: { query: FileDocument, variables: { id } },
    result: { data: { file } },
  };

  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ ok: true }),
      blob: () => Promise.resolve(new Blob()),
    }),
  );

  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <DownloadFile id={id} />
    </MockedProvider>,
  );

  expect(screen.getByTestId('loading')).toBeInTheDocument();
  expect(screen.queryAllByTitle('error')).toHaveLength(0);

  await wait();
  // screen.debug(screen.getByTestId('download'));
  expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  // expect(screen.queryAllByTitle('error')).toHaveLength(0);
});
