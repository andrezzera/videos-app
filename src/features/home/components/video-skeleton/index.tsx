import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const VideoSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={116}
      viewBox="0 0 400 116"
      backgroundColor="#101620"
      foregroundColor="#20262F">
      <Rect x="8" y="0" rx="3" ry="3" width="68" height="100" />
      <Rect x="92" y="0" rx="3" ry="3" width="100" height="12" />
      <Rect x="92" y="20" rx="3" ry="3" width="250" height="16" />
      <Rect x="92" y="42" rx="3" ry="3" width="230" height="16" />
    </ContentLoader>
  );
};

export default VideoSkeleton;
