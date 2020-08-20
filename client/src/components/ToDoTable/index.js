import React from "react";
import ToggleButtonGroupControlled from "../ControlledBtn"
import { Tabs, Tab } from 'react-bootstrap';
import './style.css';


function ToDoTable () {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Your Chores">
        <p>
          <ToggleButtonGroupControlled />
        </p>
      </Tab>
      <Tab eventKey="profile" title="Household's Chores">
      <p>
        <ToggleButtonGroupControlled />
        </p>
      </Tab>
    </Tabs>
  );
}

export default ToDoTable;