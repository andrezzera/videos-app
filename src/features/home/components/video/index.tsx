import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { VideoProps } from "./types";

const Video = ({ id, title, thumbnail, category }: VideoProps) => {
  const navigation = useNavigation();

  return (
    <S.Container onPress={() => navigation.navigate("Video", { id })}>
      <S.Thumbnail src={thumbnail} />
      <S.Details>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </S.Details>
    </S.Container>
  );
};

export default Video;
