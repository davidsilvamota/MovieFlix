import { apiKey } from "../../utils/apiKey/key";
const baseURLGuardioes = "`http://www.omdbapi.com/?i=tt3896198&apikey=e083227e";


const axios = require("axios").default;
const Api = axios.create({
  baseURL: `http://www.omdbapi.com`,
});
export default Api;

export function getMovies(title:string, year:string) {
  return Api.get(`/?t=${title}&y=${year}&apikey=${apiKey}`);
}
