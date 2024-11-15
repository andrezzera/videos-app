import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const VideoInfo = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const Views = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark[800]};
  padding: 16px;
  border-radius: 3px;
  line-height: 20px;
`;
