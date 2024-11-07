import { useEffect } from "react";
import * as S from "./styles";
import { Video, ResizeMode } from "expo-av";
import { RootScreenProps } from "@/shared/router/types";
import { useVideo } from "../hooks/video.hook";
import LikeButton from "./components/like-button";
import Skeleton from "./components/skeleton";
import React from "react";

export const VideoView = ({ route }: RootScreenProps<"Video">) => {
  const { fetchVideo, video, videoSize, isLiked, likeVideo, isLoading } = useVideo();
  const { width, height } = videoSize();

  useEffect(() => {
    fetchVideo({ id: route.params.id });
  }, [fetchVideo, route.params.id]);

  return (
    <S.Container>
      {isLoading ? (
        <Skeleton videoSize={{ width, height }} />
      ) : (
        <React.Fragment>
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
            <LikeButton
              testID="like-button"
              isLiked={isLiked}
              likes={video.likes}
              onPress={() => likeVideo()}
            />
          </S.VideoInfo>
          <S.Title>{video.title}</S.Title>
          {video.description && <S.Description>{video.description}</S.Description>}
        </React.Fragment>
      )}
    </S.Container>
  );
};
