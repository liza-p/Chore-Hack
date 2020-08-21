import React from "react";
import SignUpForm from "../components/SignUp";
import { Container } from "../components/Grid";


const SignUp = props => {
    return (
    <Container fluid>
        <SignUpForm {...props} />
    </Container>
    )
}

export default SignUp;