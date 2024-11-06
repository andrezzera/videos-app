import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 16px;
  background: ${({ theme }) => theme.colors.dark[800]};
  padding: 8px;
  border-radius: 3px;
`;

export const Thumbnail = styled.Image`
  width: 68px;
  height: 100px;
  border-radius: 3px;
`;

export const Details = styled.View`
  flex: 1;
  gap: 6px;
`;

export const Category = styled.Text`
  font-size: 11px;
  font-weight: 100;
  border-radius: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
