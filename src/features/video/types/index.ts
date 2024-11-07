import { IVideo } from "@/shared/types";

export interface VideoContextProps {
  video: IVideo;
  fetchVideo: (params: FetchVideoParams) => Promise<void>;
  videoSize: () => { width: number; height: number };
  isLiked: boolean;
  likeVideo: () => Promise<void>;
  isLoading: boolean;
}

export interface GetVideoResponse extends IVideo {}

export interface GetVideoParams {
  id: string;
}

export interface FetchVideoParams {
  id: string;
}

export interface PatchVideoParams {
  id: string;
  video: Partial<Pick<IVideo, "likes" | "views">>;
}
