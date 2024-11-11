import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { getVideo, patchVideo } from "../services/video.service";
import { IVideo } from "@/shared/types";
import { VideoContext } from "../context/video.context";
import { FetchVideoParams } from "../types";
import { Dimensions } from "react-native";

export const VideoProvider = ({ children }: PropsWithChildren) => {
  const [video, setVideo] = useState<IVideo>({} as IVideo);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const videoSize = () => {
    const width = Dimensions.get("window").width - 32;
    const height = (width / 16) * 9;
    return {
      width,
      height,
    };
  };

  const fetchVideo = useCallback(async ({ id }: FetchVideoParams) => {
    try {
      setIsLoading(true);
      const response = await getVideo({ id });
      const responseData = response.data;
      setVideo(responseData);
    } catch (e) {
      console.error("Erro ao buscar video", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const incrementViews = useCallback(async () => {
    try {
      await patchVideo({
        id: video.id,
        video: {
          views: video.views + 1,
        },
      });
      setIsViewed(true);
    } catch (e) {
      console.error("Erro ao incrementar a quantidade de visualizações", e);
    }
  }, [video]);

  const likeVideo = useCallback(async () => {
    try {
      await patchVideo({
        id: video.id,
        video: {
          likes: isLiked ? video.likes - 1 : video.likes + 1,
        },
      });
      setVideo({ ...video, likes: isLiked ? video.likes - 1 : video.likes + 1 });
      setIsLiked(!isLiked);
    } catch (e) {
      console.error("Erro ao incrementar a quantidade de curtidas", e);
    }
  }, [isLiked, video]);

  useEffect(() => {
    !isViewed && video.id && incrementViews();
  }, [video, incrementViews, isViewed]);

  return (
    <VideoContext.Provider value={{ video, fetchVideo, videoSize, isLiked, likeVideo, isLoading }}>
      {children}
    </VideoContext.Provider>
  );
};
