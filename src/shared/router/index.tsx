import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { HomeScreen, VideoScreen } from "@/features";
import NavigationHeader from "../components/navigation-header";
import { View } from "react-native";
import Layout from "../components/layout";

export const StackRouter = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: NavigationHeader,
        presentation: "transparentModal",
      }}>
      <Stack.Screen
        name="Home"
        children={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Video" children={VideoScreen} />
    </Stack.Navigator>
  );
};
