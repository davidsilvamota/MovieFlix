import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Avatar, Banner, Searchbar } from "react-native-paper";
import { getMovies, MoviesType } from "../api/MoviesApi/MoviesApi";
import LoadingModel from "../components/atoms/LoadingModel";

import TextModel from "../components/atoms/TextModel";
import SearchedMovieCard from "../components/molecules/SearchedMovieCard";

export default function HomeScreen() {
  const [moviesData, setMoviesData] = React.useState<MoviesType[]>();
  const [searchTitleMovie, setSearchTitleMovie] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    try {
      getMovies(searchTitleMovie).then((data) =>
        setMoviesData(data.data.Search)
      );
    } catch (err) {
      console.log(err);
    }
  }, [searchTitleMovie]);

  return (
    <View style={styles.container}>
      <LoadingModel loading={isLoading} />
      <TextModel marginVertical={10} variant="displaySmall">
        Movies
      </TextModel>

      <Searchbar
        placeholder="Movie title"
        onChangeText={(text) => setSearchTitleMovie(text)}
        value={searchTitleMovie}
      />
      <Banner visible={searchTitleMovie.length > 0 ? true : false}>
        {moviesData?.map((e) => (
          <SearchedMovieCard
            id={e.imdbID}
            title={e.Title}
            poster={e.Poster}
            year={e.Year}
            type={e.Type}
            onPress={() => console.log(e.imdbID)}
          />
        ))}
      </Banner>
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
