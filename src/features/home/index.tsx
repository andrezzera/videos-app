import React from "react";
import { HomeView } from "./view";
import { VideosProvider } from "./provider/videos.provider";
import { CategoriesProvider } from "./provider/categories.provider";

export const HomeScreen = () => {
  return (
    <CategoriesProvider>
      <VideosProvider>
        <HomeView />
      </VideosProvider>
    </CategoriesProvider>
  );
};
