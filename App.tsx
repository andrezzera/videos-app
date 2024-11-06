import "./gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk";
import { theme } from "@/shared/styles/theme";
import { StackRouter } from "@/shared/router";
import Layout from "@/shared/components/layout";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Layout>
            <StackRouter />
          </Layout>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}
