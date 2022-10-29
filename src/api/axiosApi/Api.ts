import { apiKey } from "../../utils/apiKey/key";


const axios = require("axios").default;
const Api = axios.create({
  baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=e083227e`,
});
export default Api;

export function getMovies() {
  return Api.get();
}
