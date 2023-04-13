// React
import type React from "react";

// CVA
import { type VariantProps, cva } from "class-variance-authority";

// Interfaces
import { type TGlobalColor } from "@/features/app/interfaces/componentProps";

export const button = cva("btn", {
  variants: {
    rounded: {
      small: ["btn--rounded-small"],
      large: ["btn--rounded-large"],
    },
    color: {
      primary: ["bg-primary"],
      secondary: ["bg-secondary"],
      success: ["bg-success"],
      danger: ["bg-danger"],
      info: ["bg-info"],
      warning: ["bg-warning"],
      facebook: ["bg-facebook"],
      spotify: ["bg-spotify"],
    },
    size: {
      small: ["btn--small"],
      medium: ["btn--medium"],
      large: ["btn--large"],
    },
  },
  defaultVariants: {
    color: "primary",
    rounded: "small",
    size: "medium",
  },
});

export interface IAppButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  className?: string;
  navigate?: string;
  rounded?: "small" | "large";
  color?: TGlobalColor;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
