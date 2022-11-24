// import React, { useEffect } from "react";
// import { ImageBackground, View } from "react-native";
// import TextModel from "../components/atoms/TextModel";
// function CardDetaislMovie(props: { imgUrl: string; title: string }) {
//   return (
//     <ImageBackground
//       source={{
//         uri: props.imgUrl,
//       }}
//       style={{ flex: 1 }}
//     >
//       <TextModel variant="displayMedium">{props.title}</TextModel>
//     </ImageBackground>
//   );
// }
// export default function MovieDetailsScreen({ route }: any) {
//   const { movieId } = route.params;
//   const [movieDetails, setMovieDetails] = React.useState();

//   return (
//     <CardDetaislMovie
//       imgUrl={movieDetails?.Poster || ""}
//       title={movieDetails?.Title || ""}
//     />
//   );
// }
