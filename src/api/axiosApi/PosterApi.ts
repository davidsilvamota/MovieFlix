import axios from "axios";

const PosterApi = axios.create({
    baseURL:`https://image.tmdb.org/t/p/w500`
  });
  export default PosterApi;