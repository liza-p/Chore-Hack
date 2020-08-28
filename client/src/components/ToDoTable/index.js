import React, { useEffect, useState } from "react";
import Repetitions from "../Repetitions";
import { Tabs, Tab } from 'react-bootstrap';
import './style.css';
import { useChoreContext } from "../../utils/GlobalState";
import { UPDATE_REPETITIONS } from "../../utils/actions";
import API from "../../utils/API";

function ToDoTable() {

  const [state, dispatch] = useChoreContext();
  const [filteredReps, setFilteredReps] = useState([]);

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

  const setCompleted = (repId, complete) => {
    API.completeRepetition(repId, complete)
    .then(res =>{
      loadRepetitions();
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    loadRepetitions();
  }, []);

  // only show a single upcoming repetition for each chore
  useEffect(() => {
    const tempFilteredReps = [];

    for (let i = 0; i < state.repetitions.length; i++) {
      tempFilteredReps.push(state.repetitions[i]);
    }

    setFilteredReps(tempFilteredReps);
  }, [state.repetitions]);

  return (
    <div className="m-4 border rounded">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Your Chores">
            <UserReps onComplete={setCompleted} reps={filteredReps}/>
          </Tab>
          <Tab eventKey="profile" title="Household's Chores">
            <HouseholdReps onComplete={setCompleted} reps={filteredReps}/>
          </Tab>
        </Tabs>
    </div>
  );
}

function HouseholdReps(props) {
  return (
    <Repetitions reps={props.reps} onComplete={props.onComplete} />
  );
}

function UserReps(props) {
  const [state, dispatch] = useChoreContext();
  return (
    <Repetitions reps={props.reps.filter((repetition) => repetition.UserId === state.userId)} onComplete={props.onComplete}/>
  );
}

export default ToDoTable;