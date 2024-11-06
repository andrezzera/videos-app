import { Dimensions } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { Video, ResizeMode } from "expo-av";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { IVideo } from "@/shared/types";
import { RootScreenProps } from "@/shared/router/types";

export const VideoView = ({ navigation, route }: RootScreenProps<"Video">) => {
  const httpService = axios.create({ baseURL: "http://192.168.3.105:3000" });

  const getVideo = (id: string) => {
    return httpService.get(`/videos/${id}`);
  };

  const fetchVideo = async () => {
    try {
      const response = await getVideo(route.params.id);

      const data = response.data;
      setVideo(data);
    } catch (e) {
      console.log("erro ao buscar videos", e);
    }
  };

  const [video, setVideo] = useState<IVideo>({} as IVideo);

  useEffect(() => {
    fetchVideo();
  }, []);

  const videoWidth = Dimensions.get("window").width - 32;
  const videoHeight = (videoWidth / 16) * 9;

  return (
    <S.Container>
      <Video
        shouldPlay
        source={{
          uri: video.hls_path,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        style={{ width: videoWidth, height: videoHeight }}
      />
      <S.VideoInfo>
        <S.Views>{video.views} visualizações</S.Views>
        <S.LikeButton>
          <S.LikeCount>{video.likes}</S.LikeCount>
          <FontAwesome name="thumbs-o-up" size={24} color="white" />
        </S.LikeButton>
      </S.VideoInfo>
      <S.Title>{video.title}</S.Title>
      <S.Description>{video.description}</S.Description>
    </S.Container>
  );
};
