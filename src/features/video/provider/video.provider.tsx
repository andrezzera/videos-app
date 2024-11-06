import { PropsWithChildren, useState } from "react";
import { getVideo } from "../services/video.service";
import { IVideo } from "@/shared/types";
import { VideoContext } from "../context/video.context";
import { FetchVideoParams } from "../types";
import { Dimensions } from "react-native";

export const VideoProvider = ({ children }: PropsWithChildren) => {
  const [video, setVideo] = useState<IVideo>({} as IVideo);

  const videoSize = () => {
    const width = Dimensions.get("window").width - 32;
    const height = (width / 16) * 9;
    return {
      width,
      height,
    };
  };

  const fetchVideo = async ({ id }: FetchVideoParams) => {
    try {
      const response = await getVideo({ id });
      const responseData = response.data;
      setVideo(responseData);
    } catch (e) {
      console.error("Erro ao buscar video", e);
    }
  };

  return (
    <VideoContext.Provider value={{ video, fetchVideo, videoSize }}>
      {children}
    </VideoContext.Provider>
  );
};
