import React from "react";
import ToDoTable from "../components/ToDoTable";
import Calendar from "../components/Calendar";
import { Container } from "../components/Grid";


const Dashboards = () => {
    return (
        <Container fluid>
            <ToDoTable />
            <Calendar />
        </Container>
    );
};

export default Dashboards;