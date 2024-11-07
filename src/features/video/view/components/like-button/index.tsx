import React from "react";
import * as S from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export interface LikeButtonProps extends TouchableOpacityProps {
  likes: number;
  isLiked: boolean;
}

const LikeButton = ({ likes, isLiked, onPress, testID }: LikeButtonProps) => {
  return (
    <S.LikeButton isLiked={isLiked} onPress={onPress} testID={testID}>
      <S.LikeCount>{likes}</S.LikeCount>
      <FontAwesome name={isLiked ? "thumbs-up" : "thumbs-o-up"} size={24} color="white" />
    </S.LikeButton>
  );
};

export default LikeButton;
