import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { getVideo, patchVideo } from "../services/video.service";
import { IVideo } from "@/shared/types";
import { VideoContext } from "../context/video.context";
import { FetchVideoParams } from "../types";
import { Dimensions } from "react-native";

export const VideoProvider = ({ children }: PropsWithChildren) => {
  const [video, setVideo] = useState<IVideo>({} as IVideo);
  const [isLiked, setIsLiked] = useState(false);

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
      const response = await getVideo({ id });
      const responseData = response.data;
      setVideo(responseData);
    } catch (e) {
      console.error("Erro ao buscar video", e);
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
    } catch (e) {
      console.error("Erro ao incrementar a quantidade de visualizações", e);
    }
  }, [video]);

  const likeVideo = useCallback(async () => {
    try {
      await patchVideo({
        id: video.id,
        video: {
          likes: video.likes + 1,
        },
      });
      setVideo({ ...video, likes: video.likes + 1 });
      setIsLiked(true);
    } catch (e) {
      console.error("Erro ao incrementar a quantidade de curtidas", e);
    }
  }, [video]);

  useEffect(() => {
    video.id && incrementViews();
  }, [video, incrementViews]);

  return (
    <VideoContext.Provider value={{ video, fetchVideo, videoSize, isLiked, likeVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
