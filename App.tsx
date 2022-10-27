import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import ContainerScreen from "./src/components/atoms/ContainerScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <ContainerScreen>
        <HomeScreen />
      </ContainerScreen>
    </PaperProvider>
  );
}
