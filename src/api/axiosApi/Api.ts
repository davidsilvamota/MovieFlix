import axios from "axios";
import { apiKey } from "../../utils/apiKey/key";

const Api = axios.create({
  baseURL: `http://www.omdbapi.com`,
});

Api.defaults.params = {
  apiKey,
}
export default Api;

