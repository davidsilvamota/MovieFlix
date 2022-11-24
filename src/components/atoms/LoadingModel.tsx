import React from "react";
import { View, Image, StyleSheet } from "react-native";

type LoadingModelProps = {
  loading: boolean;
};
export default function LoadingModel(props: LoadingModelProps) {
  return props.loading ? (
    <View style={styles.container}>
      <Image
        style={styles.spinner}
        source={require("../../../assets/gifs/loadingCircle.gif")}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 50,
    height: 50,
  },
});
