import { useContext } from "react";
import { CategoriesContext } from "../context/categories.context";

export const useCategories = () => {
  const { categories, translateCategory } = useContext(CategoriesContext);
  return { categories, translateCategory };
};
