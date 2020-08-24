import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./SignUp.css";
// import { ADD_USER } from '../../utils/actions';
import ErrorMessage from "../ErrorMessage";
import API from "../../utils/API";
import { Card } from 'react-bootstrap';



function SignUpForm({ refreshUserData }) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [redirect, setRedirect] = useState();
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
            setError("Missing a required field.");
            passwordRef.current.value = "";
            return;
        }

        API.signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
            .then(response => {
                setError(null);
                console.log(response);
                refreshUserData();
                setRedirect("/household");
            })
            .catch(err => {
                if (!err.response) {
                    setError("Unable to connect to the server.");
                } else if (err.response.data === "SequelizeValidationError") {
                    setError("Please enter a valid email address.");
                } else if (err.response.data === "SequelizeUniqueConstraintError") {
                    setError("This email address is already associated with an account.");
                } else {
                    setError("An unknown error occurred.");
                }
                passwordRef.current.value = "";
                console.log(err);
            })
    }

    return (
        redirect ? <Redirect to={redirect} /> :
            <Card className="text-white rounded-0" style={{ margin: '0px' }}>
                <Card.Img src={process.env.PUBLIC_URL + "/img/hero-img.jpg"} alt="Card image" />
                <Card.ImgOverlay className="rounded-0">
                    {/* <Card.Text> */}
                        <Card body style={{ opacity: 0.9, marginTop: '60px', marginLeft: '90px', marginRight: '90px' }}>
                            <form className="mt-3 rounded">
                                <ErrorMessage message={error} />
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
                        </Card >
                    {/* </Card.Text> */}
                </Card.ImgOverlay>
            </Card>

    );
}

export default SignUpForm;