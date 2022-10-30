import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { getMovies } from "../api/axiosApi/Api";
import { MovieType } from "../api/MoviesApi/MoviesApi";
import TextModel from "../components/atoms/TextModel";

export default function HomeScreen() {
  const [moviesData, setMoviesData] = React.useState<MovieType>();
  const [searchTitleMovie, setSearchTitleMovie] = React.useState<string>("");
  async function searchMovie() {
    await getMovies(searchTitleMovie).then((res: any) => {
      setMoviesData(res.data);
    });
  }

  useEffect(() => {
    try {
      searchMovie();
    } catch {
      console.log("error");
    } finally {
      console.log("finally");
    }
  }, [searchTitleMovie]);
  return (
    <View style={styles.container}>
      <TextModel variant="displayLarge">Movies</TextModel>
      <Searchbar
        placeholder="Movie title"
        onChangeText={(text) => setSearchTitleMovie(text)}
        value={searchTitleMovie}
      />
      <TextModel variant="displaySmall">{moviesData?.Title || ""}</TextModel>
      <Image
        source={{
          uri: moviesData?.Poster,
        }}
        style={{
          width: 150,
          height: 200,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  space: {
    margin: 10,
  },
});
