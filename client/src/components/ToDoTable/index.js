import React from "react";
import ToggleButtonGroupControlled from "../ControlledBtn";
import HouseholdBtn from "../HouseholdBtn";
import { Tabs, Tab } from 'react-bootstrap';
import './style.css';


function ToDoTable() {
  return (
    <div className="m-4 border rounded" >
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Your Chores">
            <ToggleButtonGroupControlled />
          </Tab>
          <Tab eventKey="profile" title="Household's Chores">
            <HouseholdBtn />
          </Tab>
        </Tabs>
    </div>
  );
}

export default ToDoTable;