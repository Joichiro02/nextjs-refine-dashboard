import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import React from 'react';

type Props = {
  onDragEnd: (event: DragEndEvent) => void;
}

export function KanbanBoardContainer({children}: React.PropsWithChildren) {
  return (
    <div
      style={{
        width: "calc(100% + 3.5rem)",
        height: "calc(100vh - 4.5rem)",
        display: "flex",
        justifyContent: "column",
        margin: "-2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "32px",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function KanbanBoard({children, onDragEnd}: React.PropsWithChildren<Props>) {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5
    }
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 5
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext onDragEnd={onDragEnd} sensors={sensors}>
      {children}
    </DndContext>
  )
}

