import { useEffect } from "react";
import * as S from "./styles";
import { Video, ResizeMode } from "expo-av";
import { RootScreenProps } from "@/shared/router/types";
import { useVideo } from "../hooks/video.hook";
import LikeButton from "./components/like-button";

export const VideoView = ({ route }: RootScreenProps<"Video">) => {
  const { fetchVideo, video, videoSize, isLiked, likeVideo } = useVideo();
  const { width, height } = videoSize();

  useEffect(() => {
    fetchVideo({ id: route.params.id });
  }, [fetchVideo, route.params.id]);

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
        <LikeButton isLiked={isLiked} likes={video.likes} onPress={() => likeVideo()} />
      </S.VideoInfo>
      <S.Title>{video.title}</S.Title>
      {video.description && <S.Description>{video.description}</S.Description>}
    </S.Container>
  );
};
