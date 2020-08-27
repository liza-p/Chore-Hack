import axios from "axios";

export default {
  signup: function(name, email, password, color) {
    return axios.post("/api/users/signup", { name, email, password, color });
  },
  login: function(email, password) {
    return axios.post("/api/users/login", { email, password });
  },
  logout: function() {
    return axios.get("/api/users/logout");
  },
  getUserData: function() {
    return axios.get("/api/users");
  }, 
  getMembers: function(){
    return axios.get("/api/household/users");
  },
  createChore: function(chore, repeats, repeated_days, dueDate, UserId){
    return axios.post("/api/chores", {chore, repeats, repeated_days, dueDate, UserId});
  },
  getHouseholdInfo: function() {
    return axios.get("/api/household");
  },
  getAllHouseholdChores: function() {
    return axios.get("/api/chores");
  },
  removeChore: function(choreId){
    return axios.delete("/api/chores?id=" + choreId);
  },
  deactivateChore: function(choreId) {
    return axios.post("/api/chores/deactivate?id=" + choreId);
  }, 
  getAllRepetitions: function(){
    return axios.get("/api/repetitions");
  },
  joinHousehold: function (inviteCode){
    return axios.put("/api/household/join?invite=" + inviteCode);
  },
  completeRepetition: function(repetitionId, complete){
    return axios.put("/api/repetitions?id="+ repetitionId, {complete})
  }
};
