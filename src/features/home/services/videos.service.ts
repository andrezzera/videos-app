import { httpClient } from "@/shared/http-client";
import { ITEMS_PER_PAGE } from "../constants";
import { GetVideosParams, GetVideosResponse } from "../types";

export const getVideos = ({ page }: GetVideosParams) => {
  return httpClient.get<GetVideosResponse>(`/videos?_page=${page}&_per_page=${ITEMS_PER_PAGE}`);
};
