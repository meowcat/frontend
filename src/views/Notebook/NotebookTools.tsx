import React from 'react';

import { ItemTypes, DraggableTool } from '../../utils/dragDrop';

interface NotebookToolsProps {
  projectId: string;
}

const NotebookTools = ({ projectId }: NotebookToolsProps) => {
  const experiments = ['A123', 'A234'];
  const samples = ['A3444'];
  const gridStyle = 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3';
  const gridChild = 'border-b border-gray-200 border-solid rounded shadow p-2';
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl sm:truncate">
          Tools
        </h3>
        <div className={gridStyle}>
          <DraggableTool type={ItemTypes.COMMENT}>Comment</DraggableTool>
          <DraggableTool type={ItemTypes.FORMULA}>Formula</DraggableTool>
          <DraggableTool type={ItemTypes.IMAGE}>Image</DraggableTool>
          <DraggableTool type={ItemTypes.ARTICLE}>Article</DraggableTool>
        </div>
      </div>
      <div className="mt-4 mb-2 border-t border-gray-300"></div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl sm:truncate">
          Experiments
        </h3>
        <div className={gridStyle}>
          {experiments.map((elm) => (
            <div key={elm} className={gridChild}>
              {elm}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 mb-2 border-t border-gray-300"></div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl sm:truncate">
          Samples
        </h3>
        <div className={gridStyle}>
          {samples.map((elm) => (
            <div key={elm} className={gridChild}>
              {elm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotebookTools;
