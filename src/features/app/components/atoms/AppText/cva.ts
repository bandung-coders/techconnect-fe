// CVA
import { cva, type VariantProps } from "class-variance-authority";

export const text = cva("text", {
  variants: {
    size: {
      small: ["text--small"],
      medium: ["text--base"],
      large: ["text--large"],
      xlarge: ["text--xlarge"],
      x2large: ["text--x2large"],
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
    weight: "normal",
  },
});

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  className?: string;
  children: string | number;
  size?: "small" | "medium" | "large" | "xlarge" | "x2large";
  weight?: "normal" | "bold" | "semibold" | "xbold" | "2xlbold";
  onClick?: () => void;
}
