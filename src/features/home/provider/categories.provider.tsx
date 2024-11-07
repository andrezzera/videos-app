import { PropsWithChildren, useEffect, useState } from "react";
import { ICategory } from "@/shared/types";
import { CategoriesContext } from "../context/categories.context";
import { getCategories } from "../services/categories.service";

export const CategoriesProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();

      setCategories(response.data);
    } catch (e) {
      console.error("Erro ao buscar categorias", e);
    }
  };

  const translateCategory = (id: string) => {
    const category = categories.filter((category) => category.id == id);
    return category[0].title;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, translateCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};
