import React from 'react';
import { GraphQLError } from 'graphql';
import { render, screen, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Experiments from '../index';
import { ExperimentsDocument } from '../../../utils/generated';

const variables = { page: 0, filters: {} };

it('Search for columns', async () => {
  const mocks = [
    {
      request: { query: ExperimentsDocument, variables },
      result: {
        data: {
          experiments: [
            {
              owners: ['me'],
              tags: ['hi'],
              title: 'first test',
              creationDate: new Date(2019).toString(),
              lastModificationDate: new Date().toString(),
              status: 'active',
            },
            {
              owners: ['me', 'you'],
              tags: ['test', 'testing'],
              title: 'second test',
              description: 'we are testing',
              creationDate: new Date(2019).toString(),
              lastModificationDate: new Date().toString(),
            },
          ],
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Experiments />
    </MockedProvider>,
  );
  await wait();
  const columns = [
    'Title',
    'Description',
    'Owners',
    'Tags',
    'Creation date',
    'Last modification date',
    'Status',
  ];
  for (const column of columns) {
    expect(screen.getByText(column)).toBeInTheDocument();
  }
});

it('Error display', async () => {
  const mocks = [
    {
      request: { query: ExperimentsDocument, variables },
      result: {
        errors: [new GraphQLError('Error!')],
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Experiments />
    </MockedProvider>,
  );
  await wait();
  expect(screen.getByText('Error!')).toBeInTheDocument();
});
