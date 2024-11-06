import React from "react";
import * as S from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const NavigationHeader = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      {navigation.canGoBack() && (
        <S.BackButton onPress={() => navigation.goBack()}>
          <FontAwesome name="angle-left" size={24} color="white" />
        </S.BackButton>
      )}
    </S.Container>
  );
};

export default NavigationHeader;
