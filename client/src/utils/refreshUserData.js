import API from "./API";
import {
  UPDATE_USERNAME,
  UPDATE_HOUSEHOLD,
  UPDATE_MEMBERS,
  UPDATE_CHORES,
  UPDATE_REPETITIONS,
} from './actions';

// a function to reload ALL user data (to be used when app loads, login/logout/signup, or household change)
function refreshUserData(dispatch) {
  // set username
  API.getUserData()
    .then(response => {
      dispatch({
        type: UPDATE_USERNAME,
        username: response.data.name,
        userId: response.data.id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_USERNAME, username: "", userId: null });
    })

  // set household info
  API.getHouseholdInfo()
    .then(response => {
      console.log(response);
      dispatch({
        type: UPDATE_HOUSEHOLD,
        household: response.data.name,
        inviteCode: response.data.invite_code,
      });
      dispatch({
        type: UPDATE_MEMBERS,
        members: response.data.members,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_HOUSEHOLD,
        household: null,
        inviteCode: null,
      });
      dispatch({
        type: UPDATE_MEMBERS,
        members: [],
      });
    })

  // load chores
  API.getAllHouseholdChores()
    .then(res => {
      dispatch({ type: UPDATE_CHORES, chores: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_CHORES, chores: [] });
    });

  // load repetitions
  API.getAllRepetitions()
    .then(res => {
      dispatch({ type: UPDATE_REPETITIONS, repetitions: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_REPETITIONS, repetitions: [] });
    });
}

export default refreshUserData;