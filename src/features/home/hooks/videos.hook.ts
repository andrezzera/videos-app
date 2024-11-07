import { useContext } from "react";
import { VideosContext } from "../context/videos.context";

export const useVideos = () => {
  const { videos, fetchVideos, hasNextPage } = useContext(VideosContext);
  return { videos, fetchVideos, hasNextPage };
};
