// CVA
import { cva, type VariantProps } from "class-variance-authority";

export const text = cva("", {
  variants: {
    size: {
      small: ["text-small"],
      medium: ["text-base"],
      large: ["text-large"],
      xlarge: ["text-xlarge"],
      x2large: ["text-x2large"],
    },
    weight: {
      normal: ["font-normal"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
      xbold: ["font-extrabold"],
      "2xlbold": ["font-black"],
    },
    align: {
      left: ["text-left"],
      right: ["text-right"],
      center: ["text-center"],
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
  weight?: "normal" | "bold" | "semibold" | "xbold" | "2xlbold";
  align?: "left" | "right" | "center";
}
