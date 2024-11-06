import { httpClient } from "@/shared/http-client";
import { GetVideoParams, GetVideoResponse, PatchVideoParams } from "../types";

export const getVideo = ({ id }: GetVideoParams) => {
  return httpClient.get<GetVideoResponse>(`/videos/${id}`);
};

export const patchVideo = ({ id, video }: PatchVideoParams) => {
  return httpClient.patch(`/videos/${id}`, { ...video });
};
