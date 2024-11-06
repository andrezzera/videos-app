import React from "react";
import { VideoView } from "./view";
import { RootScreenProps } from "@/shared/router/types";

export const VideoScreen = (props: RootScreenProps<"Video">) => {
  return <VideoView {...props} />;
};
