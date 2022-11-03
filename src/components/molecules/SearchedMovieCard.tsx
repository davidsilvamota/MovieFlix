import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import TextModel from "../atoms/TextModel";

type SearchedMovieCardProps = {
    title: string;
    poster: string;
    year: string;
    type: string;
    id: string;
    onPress: () => void;
  };

  
  export default function SearchedMovieCard(props: SearchedMovieCardProps) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
          marginVertical: 8,
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
            variant="labelMedium"
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