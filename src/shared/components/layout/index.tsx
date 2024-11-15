import React, { PropsWithChildren } from "react";
import * as S from "./styles";

const Layout = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
