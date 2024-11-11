import { Animated, FlatList } from "react-native";
import * as S from "./styles";
import Video from "../components/video";
import { useVideos } from "../hooks/videos.hook";
import VideoSkeleton from "../components/video-skeleton";
import { useEffect, useRef } from "react";

export const HomeView = () => {
  const { videos, fetchVideos, hasNextPage } = useVideos();
  const titlePosition = useRef(new Animated.ValueXY({ x: -150, y: 0 })).current;

  useEffect(() => {
    Animated.spring(titlePosition, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  }, [titlePosition]);

  return (
    <S.Container>
      <S.ScreenTitle
        style={{
          transform: [{ translateX: titlePosition.x }, { translateY: titlePosition.y }],
        }}
        as={Animated.Text}>
        Feed de videos
      </S.ScreenTitle>
      {videos && (
        <Animated.FlatList
          data={videos}
          renderItem={({ item }) => (
            <Video
              id={item.id}
              category={item.category}
              title={item.title}
              thumbnail={item.thumbnail}
            />
          )}
          contentContainerStyle={{ gap: 16 }}
          keyExtractor={(item) => item.id}
          onEndReached={() => videos.length > 0 && fetchVideos()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => (hasNextPage ? <VideoSkeleton /> : null)}
        />
      )}
    </S.Container>
  );
};
