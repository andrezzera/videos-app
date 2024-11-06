import React from "react";
import { VideoView } from "./view";
import { RootScreenProps } from "@/shared/router/types";
import { VideoProvider } from "./provider/video.provider";

export const VideoScreen = (props: RootScreenProps<"Video">) => {
  return (
    <VideoProvider>
      <VideoView {...props} />
    </VideoProvider>
  );
};
