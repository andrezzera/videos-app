import { PropsWithChildren, useState } from "react";

import { getVideo } from "../services/video.service";
import { IVideo } from "@/shared/types";
import { VideoContext } from "../context/video.context";
import { FetchVideoParams } from "../types";

export const VideoProvider = ({ children }: PropsWithChildren) => {
  const [video, setVideo] = useState<IVideo>({} as IVideo);

  const fetchVideo = async ({ id }: FetchVideoParams) => {
    try {
      const response = await getVideo({ id });
      const responseData = response.data;
      setVideo(responseData);
    } catch (e) {
      console.error("Erro ao buscar video", e);
    }
  };

  return <VideoContext.Provider value={{ video, fetchVideo }}>{children}</VideoContext.Provider>;
};
