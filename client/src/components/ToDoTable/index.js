import React from "react";
import ToggleButtonGroupControlled from "../ControlledBtn";
import HouseholdBtn from "../HouseholdBtn";
import { Form, Col, Row, Tabs, Tab } from 'react-bootstrap';
import './style.css';


function ToDoTable () {
  return (
  <Form>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Your Chores">
        <p>
          <ToggleButtonGroupControlled />
        </p>
      </Tab>
      <Tab eventKey="profile" title="Household's Chores">
        <p>
        {/* <ToggleButtonGroupControlled /> */}
        <HouseholdBtn />
        </p>
      </Tab>
    </Tabs>
  </Form>
  );
}

export default ToDoTable;