import React, { useEffect } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Avatar, Banner, Searchbar } from "react-native-paper";
import {
  getDetailsMovies,
  getMovies,
  MovieDetailsType,
  MoviesType,
} from "../api/MoviesApi/MoviesApi";
import ContainerScreen from "../components/atoms/ContainerScreen";
import LoadingModel from "../components/atoms/LoadingModel";

import TextModel from "../components/atoms/TextModel";
import SearchedMovieCard from "../components/molecules/SearchedMovieCard";

export default function HomeScreen() {
  const [moviesData, setMoviesData] = React.useState<MoviesType[]>();
  const [movieDetails, setMovieDetails] = React.useState<MovieDetailsType>();
  const [searchTitleMovie, setSearchTitleMovie] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    try {
      getMovies(searchTitleMovie).then((res) => setMoviesData(res.data.Search));
    } catch (err) {
      console.log(err);
    }
  }, [searchTitleMovie]);
  function getDetailMovieId(id: string) {
    getDetailsMovies(id).then((res) => setMovieDetails(res.data));
  }
  return (
    <ContainerScreen>
      <TextModel marginVertical={10} variant="bodyMedium">
        Enter the movie name
      </TextModel>
      <Searchbar
        placeholder="Movie title"
        onChangeText={(text) => setSearchTitleMovie(text)}
        value={searchTitleMovie}
      />
      <ScrollView>
      <Banner visible={searchTitleMovie.length > 0 ? true : false}>
        
        {moviesData?.map((e) => (
          <SearchedMovieCard
            id={e.imdbID}
            title={e.Title}
            poster={e.Poster}
            year={e.Year}
            type={e.Type}
            onPress={() => {
              getDetailMovieId(e.imdbID);
              console.log(e.imdbID);
            }}
          />
          
        ))}
        
      </Banner>
      </ScrollView>
    </ContainerScreen>
  );
}
const styles = StyleSheet.create({
  space: {
    margin: 10,
  },
});
