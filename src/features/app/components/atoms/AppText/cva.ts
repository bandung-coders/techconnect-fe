// CVA
import { cva, type VariantProps } from "class-variance-authority";

// Interfaces
import { type TColor } from "@/features/app/interfaces";

export const text = cva("text", {
  variants: {
    size: {
      small: ["text--small"],
      medium: ["text--base"],
      large: ["text--large"],
      xlarge: ["text--xlarge"],
      x2large: ["text--x2large"],
    },
    color: {
      primary: ["color-primary"],
      secondary: ["color-secondary"],
      success: ["color-success"],
      danger: ["color-danger"],
      info: ["color-info"],
      warning: ["color-warning"],
      facebook: ["color-facebook"],
      spotify: ["color-spotify"],
      "dark-1": ["color-dark-1"],
      blank: ["color-transparent"],
    },
    weight: {
      normal: ["text--normal"],
      semibold: ["text--semibold"],
      bold: ["text--bold"],
      xbold: ["text--xbold"],
      "2xlbold": ["text--2xlbold"],
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "semibold",
  },
});

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  className?: string;
  children: string | number;
  size?: "small" | "medium" | "large" | "xlarge" | "x2large";
  color?: TColor;
  weight?: "normal" | "bold" | "semibold" | "xbold" | "2xlbold";
  onClick?: () => void;
}
