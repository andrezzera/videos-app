import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark[800]};
`;
