import { IVideo } from "@/shared/types";

export interface VideoContextProps {
  video: IVideo;
  fetchVideo: (params: FetchVideoParams) => Promise<void>;
}

export interface GetVideoResponse extends IVideo {}

export interface GetVideoParams {
  id: string;
}

export interface FetchVideoParams {
  id: string;
}
