import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import {
  searchMoviesTitle,
  SearchMoviesTypes,
} from "../api/MoviesApi/MoviesApi";
import ContainerScreen from "../components/atoms/ContainerScreen";
import SearchedMovieCard from "../components/molecules/SearchedMovieCard";

export default function HomeScreen({ navigation, show }: any) {
  const [searchTitleMovie, setSearchTitleMovie] = useState<any>("");
  const [movies, setMovies] = useState<SearchMoviesTypes[]>([]);

  useEffect(() => {
    searchMoviesTitle(searchTitleMovie).then((res) =>
      setMovies(res.data.results)
    );
    // getPoster().then((res) => setUrlPoster(res.data));
  }, [searchTitleMovie]);

  return (
    <ContainerScreen>
      <Searchbar
        placeholder="Digite o título do filme"
        onChangeText={(text) => setSearchTitleMovie(text)}
        value={searchTitleMovie}
      />
      <View>
        <Text> nome do filme {}</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#222",
          paddingHorizontal: 20,
          paddingVertical: 4,
          display: searchTitleMovie?.length ? "flex" : "none",
        }}
      >
        {movies?.map((e, i) => (
          <SearchedMovieCard
            key={i}
            id={e.id || 0}
            title={e.title || ""}
            poster={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
            year={e.release_date || ""}
            type={e.original_language || ""}
            onPress={() => {
              navigation.navigate("Movies Details", { movieId: e.id });
            }}
          />
        ))}
      </ScrollView>
    </ContainerScreen>
  );
}
