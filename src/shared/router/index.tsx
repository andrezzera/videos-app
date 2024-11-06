import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { HomeScreen, VideoScreen } from "@/features";

export const StackRouter = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" children={HomeScreen} />
      <Stack.Screen name="Video" children={VideoScreen} />
    </Stack.Navigator>
  );
};
