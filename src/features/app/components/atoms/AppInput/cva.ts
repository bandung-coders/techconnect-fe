import { type VariantProps, cva } from "class-variance-authority";

export const input = cva("input", {
  variants: {},
});

export interface IAppInputProps extends VariantProps<typeof input> {
  className?: string;
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}
