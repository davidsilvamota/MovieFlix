import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.space}>Home Screen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Câmera
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  space: {
    margin: 10,
  },
});
