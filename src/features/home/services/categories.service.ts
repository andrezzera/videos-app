import { httpClient } from "@/shared/http-client";
import { GetCategoriesResponse } from "../types";

export const getCategories = () => {
  return httpClient.get<GetCategoriesResponse>("/categories");
};
