// React
import { useCallback } from "react";

// Components
import { AppButton } from "@/features/app/components";
import { BoardContent } from "./components";

// Redux slice
import { authLogout } from "@/features/auth/redux/slice";

// Custom hooks
import { useAppDispatch } from "@/features/app/hooks";

const HomeIndex: React.FC = () => {
  const dispatch = useAppDispatch();

  /**
   * @description Show logout modal
   *
   * @returns void
   */
  const onClickLogout = useCallback((): void => {
    dispatch(authLogout());
  }, [dispatch]);

  const newRequestData = [
    { id: "1", title: "Slicing login page" },
    { id: "2", title: "Slicing forgot password page" },
  ];
  const inProgressData = [{ id: "1", title: "Case study layout design" }];
  const completeData = [{ id: "1", title: "Implement API register" }];

  return (
    <>
      <AppButton onClick={onClickLogout} className="mb-7" variant="facebook">
        Logout
      </AppButton>
      <div className="board-content">
        <BoardContent
          droppableId={"1"}
          title="New Request"
          data={newRequestData}
        />
        <BoardContent
          droppableId={"2"}
          title="In Progress"
          data={inProgressData}
        />
        <BoardContent droppableId={"3"} title="Complete" data={completeData} />
      </div>
    </>
  );
};

export default HomeIndex;
