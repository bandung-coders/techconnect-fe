import { cva } from "class-variance-authority";

export const toast = cva("toast", {
  variants: {
    type: {
      success: "toast--success",
      error: "toast--error",
      info: "toast--info",
    },
  },
  defaultVariants: {
    type: "info",
  },
});

export interface IAppToast {
  type?: "success" | "error" | "info";
  title: string;
  description: string;
}
