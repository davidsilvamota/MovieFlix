import { apiKey } from "../../utils/apiKey/key";
import Api from "../axiosApi/Api";

export type MovieDetailsType = {
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
export type MoviesType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
export function getMovies(title?: string, year?: string) {
  return Api.get(`/`, { params: { s: title, y: year } });
}

export function getDetailsMovies(id: string) {
  return Api.get(`/`, { params: { i:id } });
}
