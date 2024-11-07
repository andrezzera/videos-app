import { PropsWithChildren, useEffect, useState } from "react";
import { INITIAL_PAGE } from "../constants";
import { getVideos } from "../services/videos.service";
import { IVideo } from "@/shared/types";
import { VideosContext } from "../context/videos.context";

export const VideosProvider = ({ children }: PropsWithChildren) => {
  const [videos, setVideos] = useState<IVideo[]>([] as IVideo[]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchVideos = async () => {
    if (!hasNextPage) return;
    try {
      const response = await getVideos({ page });
      const responseData = response.data.data;

      setVideos((prev) => [...prev, ...responseData]);
      setPage((prev) => prev + 1);
      setHasNextPage(!!response.data.next);
    } catch (e) {
      console.error("Erro ao buscar videos", e);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, fetchVideos, hasNextPage }}>
      {children}
    </VideosContext.Provider>
  );
};
