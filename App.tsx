import React from "react";
import { StatusBar } from "expo-status-bar";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import { Spin as Hamburger } from 'hamburger-react'

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <PaperProvider theme={{ mode: "exact" }}>
      <StatusBar style="auto" />

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
            headerRight: () => (
              <Hamburger onToggle={()=>console.log('clicou')} size={20} color={'white'} />
            ),
          }}
        >
          <Stack.Screen name="Movies" component={HomeScreen} />
          <Stack.Screen name="Movies Details" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
