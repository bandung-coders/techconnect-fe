import { popupHideToast, popupShowToast } from "../redux/popupSlice";
import { useAppDispatch } from "./redux";

interface IShowToast {
  type: "success" | "error" | "info";
  title: string;
  description: string;
}

interface IUseToast {
  showToast: (payload: IShowToast) => void;
  hideToast: () => void;
}

export const useToast = (): IUseToast => {
  const dispatch = useAppDispatch();
  const showToast = (payload: IShowToast): void => {
    dispatch(popupShowToast(payload));
  };
  const hideToast = (): void => {
    dispatch(popupHideToast());
  };

  return { showToast, hideToast };
};
