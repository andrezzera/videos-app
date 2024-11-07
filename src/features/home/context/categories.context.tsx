import { createContext } from "react";
import { CategoriesContextProps } from "../types";

export const CategoriesContext = createContext<CategoriesContextProps>(
  {} as CategoriesContextProps,
);
