import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
       Câmera
      </Button>
    </PaperProvider>
  );
}
