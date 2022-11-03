import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { getMovies, MoviesType } from "../api/MoviesApi/MoviesApi";
import ContainerScreen from "../components/atoms/ContainerScreen";

import TextModel from "../components/atoms/TextModel";
import SearchedMovieCard from "../components/molecules/SearchedMovieCard";

export default function HomeScreen({ navigation, show }: any) {
  const [moviesData, setMoviesData] = React.useState<MoviesType[]>();

  const [searchTitleMovie, setSearchTitleMovie] = React.useState<string>("");

  useEffect(() => {
    try {
      getMovies(searchTitleMovie).then((res) => setMoviesData(res.data.Search));
    } catch (err) {
      console.log(err);
    }
  }, [searchTitleMovie]);

  return (
    <ContainerScreen>
      <TextModel marginVertical={4} variant="bodyMedium">
        Enter the movie name
      </TextModel>
      <Searchbar
        placeholder="Movie title"
        onChangeText={(text) => setSearchTitleMovie(text)}
        value={searchTitleMovie}
      />

      <ScrollView
        style={{
          backgroundColor: "#222",
          paddingHorizontal: 20,
          paddingVertical: 4,
          display: moviesData?.length ? "flex" : "none",
        }}
      >
        {moviesData?.map((e, i) => (
          <SearchedMovieCard
            key={i}
            id={e.imdbID}
            title={e.Title}
            poster={e.Poster}
            year={e.Year}
            type={e.Type}
            onPress={() => {
              navigation.navigate("Movies Details", { movieId: e.imdbID });
            }}
          />
        ))}
      </ScrollView>
    </ContainerScreen>
  );
}
