import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDrag, useDrop } from 'react-dnd';

function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'card', text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}

function DndExample() {
  return (
    <div class="container">
      <section class="section">
        <div class="notification">
          <DndProvider backend={HTML5Backend}>
            <Card isDragging text="Batman" />
            <Card isDragging text="Smith" />
          </DndProvider>
        </div>
      </section>
    </div>
  );
}

export default DndExample;
