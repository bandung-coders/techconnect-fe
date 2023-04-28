// React
import React from "react";

// Components
import { AppButton, AppText } from "@/features/app/components";
import { Board } from "..";

// Interfaces
import { type IBoardContentProps } from "./interface";

const BoardContent: React.FC<IBoardContentProps> = ({ title, data }) => {
  return (
    <div>
      <AppText className="mb-4" weight="2xbold">
        {title}
      </AppText>
      <AppButton className="board-content__button">ADD</AppButton>
      <div className="board-content__wrapper">
        {data.map(({ id, title }) => (
          <Board key={id} title={title} />
        ))}
      </div>
    </div>
  );
};

BoardContent.defaultProps = {
  data: [],
};

export default BoardContent;
