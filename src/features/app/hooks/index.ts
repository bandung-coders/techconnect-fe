import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { type RootState, type AppDispatch } from "@/plugins/redux/store";
import { popupShowToast, popupHideToast } from "../redux/popupSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useToast = () => {
  const dispatch = useAppDispatch();
  const showToast = (): void => {
    dispatch(popupShowToast());
  };
  const hideToast = (): void => {
    dispatch(popupHideToast());
  };

  return { showToast, hideToast };
};
