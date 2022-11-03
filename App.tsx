import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContainerScreen from "./src/components/atoms/ContainerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <NavigationContainer
        theme={{
          colors: {
            background: "#333",
            primary: "black",
            text: "#333",
            notification: "#333",
            card: "#F29F05",
            border: "black",
          },
          dark: false,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
