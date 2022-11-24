import React from "react";
import { StatusBar } from "expo-status-bar";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <PaperProvider theme={{ mode: "exact" }}>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          colors: {
            background: "#333",
            primary: "black",
            text: "white",
            notification: "#333",
            card: "#222",
            border: "#555",
          },
          dark: false,
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerRight: () =>
              menuOpen ? (
                <Appbar.Action color="white" size={30} icon="close" onPress={() => {setMenuOpen(!menuOpen)}} />
              ) : (
                <Appbar.Action color="white" size={30} icon="menu" onPress={() => {setMenuOpen(!menuOpen)}} />
              ),
          }}
        >
          <Stack.Screen name="Movies" component={HomeScreen} />
          <Stack.Screen name="Movies Details" component={()=><></>} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
