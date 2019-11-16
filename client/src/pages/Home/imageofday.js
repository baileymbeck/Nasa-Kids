import axios from "axios";

export default {
  search: function() {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=4yIbtONpUhRDdHKu7mrIl5OvdQtBnh3tavJKM8t8");
  }
};
