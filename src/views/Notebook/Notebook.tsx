import React from 'react';

import NotebookChart from './NotebookChart';
import NotebookTools from './NotebookTools';

interface NotebookProps {
  path: string;
}

const Notebook = ({}: NotebookProps) => {
  const data = { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 2, 1] };
  return (
    <main className="flex">
      <div className="flex-none w-1/4 p-2">
        <NotebookTools projectId="test" />
      </div>
      <div className="flex-none w-3/4 p-2">
        <div className="min-w-full min-h-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <header className="bg-white shadow">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl">
                Notebook
              </h3>
            </div>
          </header>
          <NotebookChart data={data} />
        </div>
      </div>
    </main>
  );
};

export default Notebook;
