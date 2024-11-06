import { useEffect } from "react";
import * as S from "./styles";
import { Video, ResizeMode } from "expo-av";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { RootScreenProps } from "@/shared/router/types";
import { useVideo } from "../hooks/video.hook";

export const VideoView = ({ route }: RootScreenProps<"Video">) => {
  const { fetchVideo, video, videoSize } = useVideo();
  const { width, height } = videoSize();

  useEffect(() => {
    fetchVideo({ id: route.params.id });
  }, []);

  return (
    <S.Container>
      <Video
        shouldPlay
        source={{
          uri: video.hls_path,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        style={{ width, height }}
      />
      <S.VideoInfo>
        <S.Views>{video.views} visualizações</S.Views>
        <S.LikeButton>
          <S.LikeCount>{video.likes}</S.LikeCount>
          <FontAwesome name="thumbs-o-up" size={24} color="white" />
        </S.LikeButton>
      </S.VideoInfo>
      <S.Title>{video.title}</S.Title>
      {video.description && <S.Description>{video.description}</S.Description>}
    </S.Container>
  );
};
