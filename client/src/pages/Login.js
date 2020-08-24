import React from "react";
import LoginForm from "../components/Login";
import { Container } from "../components/Grid";

const Login = props => {
    return (
        <Container fluid>
            <LoginForm {...props} />
        </Container>
    );
};

export default Login;

