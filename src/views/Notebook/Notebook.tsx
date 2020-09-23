import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import NotebookTools from './NotebookTools';
import NotebookCanvas from './NotebookCanvas';

import Layout from '../../components/Layout';
import Error from '../../components/Error';

interface NotebookProps {
  path: string;
  routes: Array<{ path: string; name: string }>;
  projectId?: string;
}

const Notebook = ({ path, routes, projectId }: NotebookProps) => {
  // const data = { x: [1, 2, 3, 4, 5], y: [1, 2, 3, 2, 1] };
  return (
    <Layout routes={routes} path={path}>
      {projectId ? (
        <DndProvider backend={HTML5Backend}>
          <main className="flex">
            <div className="flex-none w-1/4 p-2">
              <NotebookTools projectId={projectId} />
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
                {/* <NotebookChart data={data} /> */}
                <NotebookCanvas />
              </div>
            </div>
          </main>
        </DndProvider>
      ) : (
        <Error message={`Project with id ${projectId} doesn't extist`} />
      )}
    </Layout>
  );
};

export default Notebook;
