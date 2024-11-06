import styled from "styled-components/native";
import { LikeButtonProps } from ".";

export const LikeButton = styled.TouchableOpacity<Pick<LikeButtonProps, "isLiked">>`
  background: ${({ theme, isLiked }) => (isLiked ? "#5838EE" : theme.colors.dark[600])};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
`;

export const LikeCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
`;
