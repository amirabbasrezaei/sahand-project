import { View, StatusBar } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 bg-black">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="profile"
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
