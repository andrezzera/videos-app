import { useContext } from "react";
import { VideoContext } from "../context/video.context";

export const useVideo = () => {
  const { video, fetchVideo } = useContext(VideoContext);
  return { video, fetchVideo };
};
