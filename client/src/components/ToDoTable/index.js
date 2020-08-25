import React, {useEffect} from "react";
import Repetitions from "../Repetitions";
import { Tabs, Tab } from 'react-bootstrap';
import './style.css';
import { useChoreContext } from "../../utils/GlobalState";
import { UPDATE_REPETITIONS } from "../../utils/actions";
import API from "../../utils/API";

function ToDoTable() {

  const [state, dispatch] = useChoreContext();

  const loadRepetitions =() =>{

    API.getAllRepetitions()
    .then(res => {
      dispatch({ type: UPDATE_REPETITIONS, repetitions: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_REPETITIONS, repetitions: [] });
    });
  }

  useEffect(() => {
    loadRepetitions();
  }, []);

  return (
    <div className="m-4 border rounded" >
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Your Chores">
            <UserReps />
          </Tab>
          <Tab eventKey="profile" title="Household's Chores">
            <HouseholdReps />
          </Tab>
        </Tabs>
    </div>
  );
}

function HouseholdReps() {
  const [state, dispatch] = useChoreContext();
  return (
    <Repetitions reps={state.repetitions} />
  );
}

function UserReps() {
  const [state, dispatch] = useChoreContext();
  return (
    <Repetitions reps={state.repetitions.filter((repetition) => repetition.UserId === state.userId)} />
  );
}

export default ToDoTable;