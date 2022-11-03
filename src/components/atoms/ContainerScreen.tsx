import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

export default function ContainerScreen(props: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={styles.container }>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#333",
    overflow: "hidden",
  },
});
