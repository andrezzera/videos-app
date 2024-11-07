import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { SkeletonProps } from "./types";

const Skeleton = ({ videoSize }: SkeletonProps) => {
  return (
    <ContentLoader
      speed={2}
      width={videoSize.width}
      height={400}
      viewBox={`0 0 ${videoSize.width} 400`}
      backgroundColor="#101620"
      foregroundColor="#20262F">
      <Rect x="0" y="0" rx="3" ry="3" width={videoSize.width} height={videoSize.height} />
      <Rect x="0" y={videoSize.height + 14} rx="3" ry="3" width="100" height="12" />
      <Rect x="0" y={videoSize.height + 38} rx="3" ry="3" width="270" height="16" />
      <Rect x="0" y={videoSize.height + 60} rx="3" ry="3" width="230" height="16" />
    </ContentLoader>
  );
};

export default Skeleton;
