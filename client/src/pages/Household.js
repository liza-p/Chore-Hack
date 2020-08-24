import React from "react";
import Members from "../components/Members";
import Code from "../components/Jumbotron";
// import inviteModal from "../components/Invite";
// import App from "../components/Invite/modal"
import { Container } from "../components/Grid";


const Households = () => {
    return (
        <Container fluid>
            <Code />
            <Members />
            {/* <App/> */}
        </Container>
    );
};

export default Households;