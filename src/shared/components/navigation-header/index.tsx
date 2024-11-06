import React from "react";
import * as S from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NavigationHeader = () => {
  return (
    <S.Container>
      <S.BackButton>
        <FontAwesome name="angle-left" size={24} color="white" />
      </S.BackButton>
    </S.Container>
  );
};

export default NavigationHeader;
