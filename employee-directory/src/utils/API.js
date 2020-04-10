import axios from "axios";
const URL = "https://randomuser.me/api/";

export default {
  getData: () => axios.get(URL),
};
