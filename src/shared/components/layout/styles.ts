import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 16}px 16px 16px 16px;
  background: ${({ theme }) => theme.colors.background};
`;
