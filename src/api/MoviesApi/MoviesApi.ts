import { apiKey } from "../../utils/apiKey/key";
import Api from "../axiosApi/Api";
import PosterApi from "../axiosApi/PosterApi";

export type SearchMoviesTypes = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: 172.875;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: false;
  vote_average?: number;
  vote_count?: number;
};
export function searchMoviesTitle(title: string) {
  return Api.get(`/search/movie`, { params: { query: title } });
}
export function getPoster() {
  return PosterApi.get(`/no2cllXSRA56LPipQnuPlg3RuTL.jpg`);
}
// export function getMovie() {
//   return Api.get("/movie/505642-black-panther-wakanda-forever");
// }
