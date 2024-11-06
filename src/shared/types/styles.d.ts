import "styled-components/native";
import { theme } from "@/shared/styles/theme";

declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
