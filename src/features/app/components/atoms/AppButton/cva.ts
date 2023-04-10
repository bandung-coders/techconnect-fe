import { cva } from "class-variance-authority";

export const button = cva("", {
  variants: {
    rounded: {
      small: ["!rounded-[12px]"],
      large: ["!rounded-[25px]"],
    },
    color: {
      facebook: ["bg-facebook", "text-white-1"],
      spotify: ["bg-spotify", "text-primary"],
      "black-1": ["bg-black-1", "text-white-1"],
    },
  },
  // compoundVariants: [{ rounded: "small" }],
});

// export interface IAppButtonProps VariantProps<typeof button> {
//   navigate?: string;
//   rounded?: "small" | "large";
//   color?: "facebook" | "black-1" | "spotify";
// }
