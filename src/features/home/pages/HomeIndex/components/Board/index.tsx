// React
import React from "react";

// DND
import { Draggable } from "react-beautiful-dnd";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { type IBoardProps } from "./interfaces";

const Board: React.FC<IBoardProps> = ({ draggableId, title, index }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="board"
        >
          <AppText size="small" weight="semibold">
            {title}
          </AppText>
        </div>
      )}
    </Draggable>
  );
};

export default Board;
