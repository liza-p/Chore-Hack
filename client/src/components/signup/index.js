import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./SignUp.css";
import { ADD_USER } from '../../utils/actions';
import API from "../../utils/API";


function SignUpForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [redirect, setRedirect] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
            console.log("missing a required field");
            passwordRef.current.value = "";
            return;
        }

        API.signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
            .then(response => {
                console.log(response);
                setRedirect("/household");
            })
            .catch(err => {
                passwordRef.current.value = "";
                console.log(err);
            })
    }

    return (
        redirect ? <Redirect to={redirect} /> :
        <form>
            <div className="form-group">
                <label htmlFor="inputName">Display Name</label>
                <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" ref={nameRef} />
                <small id="nameHelp" className="form-text text-muted">This will be visible to members of your household.</small>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail">Email Address</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" ref={emailRef} />
                <small id="emailHelp" className="form-text text-muted">This will be used to login to Chore Hacker.</small>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Create Password</label>
                <input type="password" className="form-control" id="inputPassword" ref={passwordRef} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Agree to Terms and Conditions</label>
            </div>
            <button type="button ml-2" className="btn btn-success" onClick={event => handleSubmit(event)}>Submit</button>
        </form>
    );
}

export default SignUpForm;