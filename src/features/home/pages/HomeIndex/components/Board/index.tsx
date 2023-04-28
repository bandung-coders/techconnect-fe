// React
import React from "react";

// Components
import { AppText } from "@/features/app/components";

// Interfaces
import { type IBoardProps } from "./interfaces";

const Board: React.FC<IBoardProps> = ({ title }) => {
  return (
    <div className="board">
      <AppText size="small" weight="semibold">
        {title}
      </AppText>
    </div>
  );
};

export default Board;
