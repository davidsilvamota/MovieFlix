import { apiKey } from "../../utils/apiKey/apiKey";

const axios = require("axios").default;
const Api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${apiKey}`,
});
export default Api;

export function getMovies() {
  return Api.get();
}
