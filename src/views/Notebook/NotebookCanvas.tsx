import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes, renderDrop } from '../../utils/dragDrop';

const NotebookCanvas = () => {
  const [created, setCreated] = useState<any[]>([]);
  const [{ isOver }, drop] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      if (position) setCreated([...created, { position, item }]);
      return undefined;
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  return (
    <div ref={drop} style={{ height: '70vh' }}>
      {isOver
        ? 'Drop item'
        : created.map(({ position: { x, y }, item: { type } }, index) =>
            renderDrop(type, index, x, y),
          )}
    </div>
  );
};

export default NotebookCanvas;
