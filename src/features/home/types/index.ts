import { IVideo } from "@/shared/types";

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
