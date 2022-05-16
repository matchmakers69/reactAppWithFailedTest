import { SxProps } from "@mui/system";
import { ReactNode } from "react";

export type BaseProps<T = ReactNode> = {
  // domyslnie children jest na ReactNode, ale w komponencie podajac np. BaseProps<string> children bedzie typu string, nie podajac string children bedzie typu ReactNode, dla input mogloby byc never
  children?: T;
  id?: string;
  "data-testid"?: string;
  sx?: SxProps;
};
