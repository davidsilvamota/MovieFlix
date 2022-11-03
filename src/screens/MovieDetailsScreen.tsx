import React, { useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { getDetailsMovies, MovieDetailsType } from "../api/MoviesApi/MoviesApi";
import ContainerScreen from "../components/atoms/ContainerScreen";
import TextModel from "../components/atoms/TextModel";
function CardDetaislMovie(props: { imgUrl: string; title: string }) {
  return (
   
    <ImageBackground
      source={{
        uri: props.imgUrl,
      }}
      style={{flex:1}}
    >
      <TextModel variant="displayMedium">{props.title}</TextModel>
    </ImageBackground>
    
  );
}
export default function MovieDetailsScreen({ route, navigation }: any) {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = React.useState<MovieDetailsType>();

  useEffect(() => {
    getDetailsMovies(movieId).then((res) => setMovieDetails(res.data));
  }, []);
  return (
    <CardDetaislMovie
      imgUrl={movieDetails?.Poster || ""}
      title={movieDetails?.Title || ""}
    />
  );
}
