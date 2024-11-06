import React from "react";
import * as S from "./styles";
import { IVideo } from "@/shared/types";

interface VideoProps extends Pick<IVideo, "title" | "category" | "thumbnail"> {}

const Video = ({ title, thumbnail, category }: VideoProps) => {
  return (
    <S.Container>
      <S.Thumbnail src={thumbnail} />
      <S.Details>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </S.Details>
    </S.Container>
  );
};

export default Video;
