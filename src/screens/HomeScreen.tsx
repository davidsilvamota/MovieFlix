import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Banner, Button, Searchbar } from "react-native-paper";
import { getMovies, MoviesType } from "../api/MoviesApi/MoviesApi";
import TextModel from "../components/atoms/TextModel";

type SearchedMovieCardProps = {
  title: string;
  poster: string;
  year: string;
  type: string;
  id: string;
  onPress: () => void;
};

function SearchedMovieCard(props: SearchedMovieCardProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        marginVertical: 8,
        padding: 8,
        backgroundColor: "#333",
      }}
    >
      <Image
        source={{
          uri: props.poster,
        }}
        style={{
          width: 50,
          height: 80,
        }}
      />
      <View>
        <TextModel
          marginVertical={2}
          marginHorizontal={15}
          color="gray"
          variant="labelLarge"
        >
          {props.title}
        </TextModel>
        <TextModel
          marginVertical={2}
          marginHorizontal={15}
          color="gray"
          variant="labelSmall"
        >
          {props.year}
        </TextModel>
        <TextModel
          marginVertical={2}
          marginHorizontal={15}
          color="gray"
          variant="labelSmall"
        >
          {props.type}
        </TextModel>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const [moviesData, setMoviesData] = React.useState<MoviesType[]>();
  const [searchTitleMovie, setSearchTitleMovie] = React.useState<string>("");
  async function searchMovie() {
    await getMovies(searchTitleMovie).then((res: any) => {
      setMoviesData(res.data.Search);
    });
  }
  useEffect(() => {
    try {
      searchMovie();
    } catch {
      console.log("error");
    }
  }, [searchTitleMovie]);

  return (
    <View style={styles.container}>
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
