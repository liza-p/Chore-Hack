import axios from "axios";

export default {
  signup: function(name, email, password) {
    return axios.post("/api/users/signup", { name, email, password });
  },
};