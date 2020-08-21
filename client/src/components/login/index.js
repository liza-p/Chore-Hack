import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import API from "../../utils/API";

const LoginForm = ({ refreshUsername }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [redirect, setRedirect] = useState();
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        // clear error with every new submit attempt
        setError(null);

        if (!emailRef.current.value || !passwordRef.current.value) {
            setError("Missing a required field.");
            passwordRef.current.value = "";
            return;
        }

        API.login(emailRef.current.value, passwordRef.current.value)
            .then(response => {
                console.log(response);
                refreshUsername();
                setRedirect("/dashboard");
            })
            .catch(err => {
                passwordRef.current.value = "";
                console.log(err);
            })
    }

    return (
        redirect ? <Redirect to={redirect} /> :
        <form className="mt-3">
            <ErrorMessage message={error} />
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
            </div>
            <button className="btn btn-primary" onClick={event => handleSubmit(event)}>Login</button>
            <br></br>
            <Link to="/signup">New user? Sign up</Link>
        </form>
    )
}

export default LoginForm;
