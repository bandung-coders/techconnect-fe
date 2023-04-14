// React
import type React from "react";

// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const button = cva("btn", {
  variants: {
    rounded: {
      small: ["btn--rounded-small"],
      large: ["btn--rounded-large"],
    },
    color: {
      primary: ["btn--primary"],
      secondary: ["btn--secondary"],
      success: ["btn--success"],
      danger: ["btn--danger"],
      info: ["btn--info"],
      warning: ["btn--warning"],
      facebook: ["btn--facebook"],
      spotify: ["btn--spotify"],
      dark: ["btn--dark"],
      blank: ["btn--transparent"],
    },
    size: {
      small: ["btn--small"],
      medium: ["btn--medium"],
      large: ["btn--large"],
    },
    block: {
      true: ["btn--block"],
    },
    loading: {
      true: ["btn--loading"],
    },
  },
  defaultVariants: {
    color: "primary",
    rounded: "small",
    size: "medium",
  },
});

type TColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "warning"
  | "facebook"
  | "spotify"
  | "dark"
  | "blank";

export interface IAppButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  className?: string;
  navigate?: string;
  rounded?: "small" | "large";
  color?: TColor;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
