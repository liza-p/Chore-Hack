import React from "react";
import ToDoTable from "../components/ToDoTable";
// import Calendar from "../components/Calendar";
import Charts from "../components/Charts";
import { Container } from "../components/Grid";
import Calendar from "../components/calendarr/demo"


const Dashboards = () => {
    return (
        <Container fluid>
            <ToDoTable />
            <Calendar />
            <Charts />
        </Container>
    );
};

export default Dashboards;