import React, { useEffect, useState } from "react";
import Repetitions from "../Repetitions";
import { Tabs, Tab } from 'react-bootstrap';
import './style.css';
import { useChoreContext } from "../../utils/GlobalState";
import { UPDATE_REPETITIONS } from "../../utils/actions";
import API from "../../utils/API";
import { Container } from "react-bootstrap";


function ToDoTable() {

  const [state, dispatch] = useChoreContext();
  const [filteredReps, setFilteredReps] = useState([]);

  const loadRepetitions = () => {

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
      .then(res => {
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
    const today = new Date();
    today.setHours(0, 0, 0, 0); // we want to include repets due at any time today
    const usedChores = {};

    for (let i = 0; i < state.repetitions.length; i++) {
      // check if we've listed this chore yet
      if (!usedChores[state.repetitions[i].ChoreId]) {
        // check if the due date is in the future
        let dueDate = new Date(state.repetitions[i].due_date);
        if (dueDate >= today) {
          tempFilteredReps.push(state.repetitions[i]);
          usedChores[state.repetitions[i].ChoreId] = true;
        }
      }
    }

    setFilteredReps(tempFilteredReps);
  }, [state.repetitions]);

  return (
    <Container style={{ marginBottom: 25 }} >
      <div className="m-4 border rounded" >
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Your Chores">
            <UserReps onComplete={setCompleted} reps={filteredReps} />
          </Tab>
          <Tab eventKey="profile" title="Household's Chores">
            <HouseholdReps onComplete={setCompleted} reps={filteredReps} />
          </Tab>
        </Tabs>
      </div>
    </Container>

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
    <Repetitions reps={props.reps.filter((repetition) => repetition.UserId === state.userId)} onComplete={props.onComplete} />
  );
}

export default ToDoTable;