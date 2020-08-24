import axios from "axios";

export default {
  signup: function(name, email, password) {
    return axios.post("/api/users/signup", { name, email, password });
  },
  login: function(email, password) {
    return axios.post("/api/users/login", { email, password });
  },
  logout: function() {
    return axios.get("/api/users/logout");
  },
  getUsername: function() {
    return axios.get("/api/users/name");
  }, 
  getMembers: function(){
    return axios.get("/api/household/users");
  },
  createChore: function(chore,repeats, repeated_days, UserId){
    return axios.post("/api/chores", {chore,repeats, repeated_days, UserId});
  },
  getHouseholdInfo: function() {
    return axios.get("/api/household");
  },
  getAllHouseholdChores: function() {
    return axios.get("/api/chores");
  },
  removeChore: function(choreId){
    return axios.delete("/api/chores?id=" + choreId);
  }
};
