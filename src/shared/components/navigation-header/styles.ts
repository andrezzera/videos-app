import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16px;
  display: flex;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
`;
