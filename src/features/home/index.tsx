import React from "react";
import { HomeView } from "./view";
import { VideosProvider } from "./provider/videos.provider";

export const HomeScreen = () => {
  return (
    <VideosProvider>
      <HomeView />
    </VideosProvider>
  );
};
