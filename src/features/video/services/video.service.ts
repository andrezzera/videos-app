import { httpClient } from "@/shared/http-client";
import { GetVideoParams, GetVideoResponse } from "../types";

export const getVideo = ({ id }: GetVideoParams) => {
  return httpClient.get<GetVideoResponse>(`/videos/${id}`);
};
