import axios from "axios";
const URL = "https://randomuser.me/api/?results=5000";

export default {
  getData: () => axios.get(URL),
};
