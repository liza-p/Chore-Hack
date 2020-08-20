import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ToDoTable () {
  return (
      <Tabs>
        <TabList>
          <Tab>Your Chores</Tab>
          <Tab>Household Chores</Tab>
        </TabList>
     
        <TabPanel>
          <p>Any content 1</p>
        </TabPanel>
        <TabPanel>
          <p>Any content 2</p>
        </TabPanel>
      </Tabs>
  );
}

export default ToDoTable;