import React, { useState } from 'react';

import SampleForm from './SampleForm';

import Error from '../../components/Error';
import Table, { TableColumn } from '../../components/Table';

import { Sample, useSamplesQuery } from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';

function stringSorter(key: 'codeId' | 'title') {
  return (a: Sample, b: Sample) => a[key].localeCompare(b[key]);
}

const columns: TableColumn<Sample>[] = [
  {
    key: 'codeId',
    title: 'Code',
    sorter: stringSorter('codeId'),
  },
  {
    key: 'title',
    title: 'Title',
    sorter: stringSorter('title'),
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'status',
    title: 'Status',
    render: (value: Sample['status']) => (value ? value[0].kind : null),
  },
];

const Samples = (_: any) => {
  const { loading, error, data, refetch } = useSamplesQuery({
    variables: { page: getNumberUrlParam('page'), filters: {} },
  });
  const [visible, setVisible] = useState(false);

  if (error) return <Error message={error.message} />;

  const closeModal = (reload: boolean) => {
    if (reload) refetch();
    setVisible(false);
  };
  const { result = [], totalCount = 0 } = data?.samples || {};
  return (
    <div>
      {visible ? <SampleForm closeModal={closeModal} /> : null}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                Samples
              </h2>
            </div>
            <div className="flex mt-5 lg:mt-0 lg:ml-4">
              <span className="rounded-md shadow-sm sm:ml-3">
                <button
                  type="button"
                  onClick={() => setVisible(true)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add new sample
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Table<Sample>
            columns={columns}
            data={result || []}
            totalCount={totalCount}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
};
export default Samples;
