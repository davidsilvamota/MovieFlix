import { apiKey } from "../../utils/apiKey/key";

const axios = require("axios").default;
const Api = axios.create({
  baseURL: `http://www.omdbapi.com`,
});
export default Api;

export function getMovies(title?:string, year?:string) {
  return Api.get(`/?t=${title}&y=${year}&apikey=${apiKey}`);
}
