import { apiKey } from "../../utils/apiKey/key";
import Api from "../axiosApi/Api";

export type MovieType = {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  DVD?: string;
  Director?: string;
  Genre?: string;
  Language?: string;
  Metascore?: string;
  Plot?: string;
  Poster?: string;
  Production?: string;
  Rated?: string;
  Ratings?: { Source?: string; Value?: string }[];
  Released?: string;
  Response?: string;
  Runtime?: string;
  Title?: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year?: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: symbol;
};

export function getMovies(title?: string, year?: string) {
  return Api.get(`/?t=${title}&y=${year}&apikey=${apiKey}`);
}
