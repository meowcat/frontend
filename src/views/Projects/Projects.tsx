import React, { useState } from 'react';

import ProjectForm from './ProjectForm';

import Error from '../../components/Error';
import Table, { TableColumn } from '../../components/Table';

import {
  Project,
  ProjectFieldsFragment,
  useProjectsQuery,
} from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';
import {
  renderCreationDate,
  renderLastDate,
  renderLastStatus,
  renderOwners,
  renderTags,
} from '../../utils/tableRenders';

function stringSorter(key: 'title') {
  return (a: Project, b: Project) => a[key].localeCompare(b[key]);
}

const columns: TableColumn<ProjectFieldsFragment>[] = [
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
    key: 'owners',
    title: 'Owners',
    render: renderOwners,
  },
  {
    key: 'tags',
    title: 'Tags',
    render: renderTags,
  },
  {
    key: 'status',
    title: 'Creation date',
    render: renderCreationDate,
  },
  {
    key: 'status',
    title: 'Last modification date',
    render: renderLastDate,
  },
  {
    key: 'status',
    title: 'Status',
    render: renderLastStatus,
  },
];

const Projects = (_: any) => {
  const { loading, error, data, refetch } = useProjectsQuery({
    variables: { page: getNumberUrlParam('page'), filters: {} },
  });
  const [visible, setVisible] = useState(false);

  if (error) return <Error message={error.message} />;

  const closeModal = (reload: boolean) => {
    if (reload) refetch();
    setVisible(false);
  };
  const { result = [], totalCount = 0 } = data?.projects || {};
  return (
    <div>
      {visible ? <ProjectForm closeModal={closeModal} /> : null}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                Projects
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
                  Add new project
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Table<ProjectFieldsFragment>
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
export default Projects;
