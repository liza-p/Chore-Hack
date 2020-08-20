import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactDOM from "react-dom";
import Checkbox from "../Checkbox"
import './style.css';

function ToDoTable () {
  return (
      <Tabs>
        <TabList>
          <Tab class="tab">Your Chores</Tab>
          <Tab>Household Chores</Tab>
        </TabList>
        <TabPanel>
          <p>
          <Checkbox />
          </p>
        </TabPanel>
        <TabPanel>
          <p>Any content 2</p>
        </TabPanel>
      </Tabs>
  );
}

export default ToDoTable;