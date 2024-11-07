import { useContext } from "react";
import { VideoContext } from "../context/video.context";

export const useVideo = () => {
  const { video, fetchVideo, videoSize, isLiked, likeVideo, isLoading } = useContext(VideoContext);

  return { video, fetchVideo, videoSize, isLiked, likeVideo, isLoading };
};
