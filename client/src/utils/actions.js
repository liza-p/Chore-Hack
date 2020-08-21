export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_HOUSEHOLD = "UPDATE_HOUSEHOLD";
export const UPDATE_MEMBERS = "UPDATE_MEMBERS";

export const UPDATE_CHORES = "UPDATE_CHORES"; // set whole chore list
export const UPDATE_CHORE = "UPDATE_CHORE"; // set a single chore with a specific id
export const ADD_CHORE = "ADD_CHORE"; // add a chore to the list
export const REMOVE_CHORE = "REMOVE_CHORE"; // remove a chore with a specific id

export const UPDATE_REPETITIONS = "UPDATE_REPETITIONS";
export const COMPLETE_REPETITION = "COMPLETE_REPETITION"; // mark given repetition as complete
export const UNDO_REPETITION = "UNDO_REPETITION"; // mark given repetition as incomplete

/* x
// Example of global state
const GlobalState = {
  username: "Sierra", // the display name of currently logged in user
  household: "Team 1", // name of current user's household
  inviteCode: "ABCDEFG", // this household's invite code
  members: [
    "Ayla",
    "Hannah",
    "Liza",
    "Sierra",
  ], // display name's of current user's household members
  chores: [
    {
      id: 1, // from the database
      name: "build a website",
      repeats: false,
      dueOn: "08/28/20",
      assignedTo: "Ayla",
    },
    {
      id: 2, // from the database
      name: "group meeting",
      repeats: true,
      dueOn: [true, true, true, true, true, false, false],
      assignedTo: "Liza",
    }
  ],
  repetitions: [ // ordered by due date
    {
      id: 6, // from the database
      name: "group meeting",
      dueOn: "08/21/20",
      assignedTo: "Liza",
      complete: true,
    }, // an upcoming non-repeated chore
    {
      id: 1, // from the database
      name: "build a website",
      dueOn: "08/28/20",
      assignedTo: "Ayla",
      complete: false,
    }, // the upcoming repetition of a repeated chore
  ],
}
*/