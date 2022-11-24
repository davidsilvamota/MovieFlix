import axios from "axios";
import { apiKey } from "../../utils/apiKey/key";

const Api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});
Api.defaults.params = {
  api_key : apiKey,
  language: 'pt-BR'
};
export default Api;