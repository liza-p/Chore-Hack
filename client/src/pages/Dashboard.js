import React from "react";
import ToDoTable from "../components/ToDoTable";
import Calendar from "../components/Calendar";
import Chart from "../components/Chart";
import { Container } from "../components/Grid";


const Dashboards = () => {
    return (
        <Container fluid>
            <ToDoTable />
            <Calendar />
            <Chart />
        </Container>
    );
};

export default Dashboards;