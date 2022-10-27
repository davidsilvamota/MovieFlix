import React from "react";
import { View, StyleSheet } from "react-native";

export default function ContainerScreen(props: { children: React.ReactNode }) {
  return <View style={styles.container}>{props.children}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
