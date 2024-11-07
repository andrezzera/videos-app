import React from "react";
import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const NavigationHeader = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      {navigation.canGoBack() && (
        <S.BackButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </S.BackButton>
      )}
    </S.Container>
  );
};

export default NavigationHeader;
