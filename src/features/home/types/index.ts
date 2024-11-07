import { ICategory, IVideo } from "@/shared/types";

export interface VideosContextProps {
  videos: IVideo[];
  fetchVideos: () => Promise<void>;
  hasNextPage: boolean;
}

export interface GetVideosResponse {
  next?: number;
  data: IVideo[];
}

export interface GetVideosParams {
  page: number;
}

export interface CategoriesContextProps {
  categories: ICategory[];
  translateCategory: (id: number) => string;
}

export type GetCategoriesResponse = ICategory[];
