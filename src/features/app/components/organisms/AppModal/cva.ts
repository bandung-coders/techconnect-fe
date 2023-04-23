import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const modal = cva("modal__card", {
  variants: {
    size: {
      small: ["modal--small"],
      medium: ["modal--medium"],
      large: ["modal--large"],
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export interface IAppModalProps extends VariantProps<typeof modal> {
  children: React.ReactNode;
  show: boolean;
  size?: "small" | "medium" | "large";
  onClose?: () => void;
  onSubmit?: () => void;
}
