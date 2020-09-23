import React from 'react';
import { useDrag } from 'react-dnd';

export const ItemTypes = {
  COMMENT: 'Comment',
  FORMULA: 'Formula',
  IMAGE: 'Image',
  ARTICLE: 'Article',
};

interface DraggableToolProps {
  type: string;
  children: React.ReactNode;
}

export const DraggableTool = ({ children, type }: DraggableToolProps) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      className="p-2 border-b border-gray-200 border-solid rounded shadow"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
    </div>
  );
};

export function renderDrop(
  type: string,
  key: string | number,
  x: number,
  y: number,
) {
  console.log(type === ItemTypes.FORMULA);
  switch (type) {
    case ItemTypes.COMMENT:
    case ItemTypes.FORMULA: {
      return (
        <div key={type + key} style={{ position: 'absolute', left: x, top: y }}>
          <label htmlFor={type + key}>{type}</label>{' '}
          <input
            className="border border-gray-600 border-solid rounded"
            name={type + key}
          />
        </div>
      );
    }
    default: {
      return (
        <div key={type + key} style={{ position: 'absolute', left: x, top: y }}>
          {type}
        </div>
      );
    }
  }
}
