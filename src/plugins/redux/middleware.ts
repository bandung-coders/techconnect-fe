// Redux toolkit
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/features/app/hooks";
import { popupShowToast } from "@/features/app/redux/popupSlice";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload.data.message;
    const description = payload ?? "Tejadi kesalahan";
    const dispatch = useAppDispatch();
    dispatch(popupShowToast());
  }

  return next(action);
};
