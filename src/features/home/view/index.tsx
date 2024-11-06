import { FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";
import Video from "../components/video";
import { IVideo } from "@/shared/types";

export const HomeView = () => {
  const httpService = axios.create({ baseURL: "http://192.168.3.105:3000" });

  const getVideos = (page: number) => {
    return httpService.get(`/videos?_page=${page}&_per_page=10`);
  };

  const fetchVideos = async () => {
    if (!hasNextPage) return;
    try {
      const response = await getVideos(page);

      const data = response.data.data;
      setVideos((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
      setHasNextPage(!!response.data.next);
    } catch (e) {
      console.log("erro ao buscar videos", e);
    }
  };

  const [videos, setVideos] = useState<IVideo[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

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
        />
      )}
    </S.Container>
  );
};
