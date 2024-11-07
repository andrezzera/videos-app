import { FlatList } from "react-native";
import * as S from "./styles";
import Video from "../components/video";
import { useVideos } from "../hooks/videos.hook";
import VideoSkeleton from "../components/video-skeleton";

export const HomeView = () => {
  const { videos, fetchVideos, hasNextPage } = useVideos();

  return (
    <S.Container>
      {videos && (
        <FlatList
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
          onEndReached={() => fetchVideos()}
          onEndReachedThreshold={0.2}
          ListFooterComponent={() => (hasNextPage ? <VideoSkeleton /> : null)}
        />
      )}
    </S.Container>
  );
};
