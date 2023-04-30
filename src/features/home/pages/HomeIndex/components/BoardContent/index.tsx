// React
import React from "react";

// DND
import {
  type DropResult,
  DragDropContext,
  Droppable,
} from "react-beautiful-dnd";

// Components
import { AppButton, AppText } from "@/features/app/components";
import { Board } from "..";

// Interfaces
import { type IBoardContentProps } from "./interface";

const BoardContent: React.FC<IBoardContentProps> = ({
  droppableId,
  title,
  data,
}) => {
  const onDragEnd = (results: DropResult): void => {
    console.log(results);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <AppText className="mb-4" weight="2xbold">
          {title}
        </AppText>
        <AppButton className="board-content__button">ADD</AppButton>
        <div className="board-content__wrapper">
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map(({ id, title }, index) => (
                  <Board
                    key={id}
                    draggableId={id}
                    index={index}
                    title={title}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

BoardContent.defaultProps = {
  data: [],
};

export default BoardContent;
