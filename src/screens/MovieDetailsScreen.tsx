import React, { useEffect } from "react";
import { getDetailsMovies, MovieDetailsType } from "../api/MoviesApi/MoviesApi";
import ContainerScreen from "../components/atoms/ContainerScreen";
import TextModel from "../components/atoms/TextModel";

export default function MovieDetailsScreen({ route, navigation }: any) {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = React.useState<MovieDetailsType>();
  
  useEffect(() => {
    getDetailsMovies(movieId).then((res) => setMovieDetails(res.data));
  }, []);
  return (
    <ContainerScreen>
      <TextModel>{movieId}</TextModel>
    </ContainerScreen>
  );
}
