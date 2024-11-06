import { IVideo } from "@/shared/types";

export interface VideosContextProps {
  videos: IVideo[];
  fetchVideos: () => Promise<void>;
}

export interface GetVideosResponse {
  next?: number;
  data: IVideo[];
}

export interface GetVideosParams {
  page: number;
}
