import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import API from "../../utils/API";
import { Card } from 'react-bootstrap';


const LoginForm = ({ refreshUserData }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [redirect, setRedirect] = useState();
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (!emailRef.current.value || !passwordRef.current.value) {
            setError("Missing a required field.");
            passwordRef.current.value = "";
            return;
        }

        API.login(emailRef.current.value, passwordRef.current.value)
            .then(response => {
                setError(null);
                console.log(response);
                refreshUserData();
                setRedirect("/dashboard");
            })
            .catch(err => {
                // show error message depending on error type
                if (!err.response) {
                    setError("Unable to connect to the server.");
                } else if (err.response.status === 401) {
                    setError("Invalid email or password.");
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
                <Card.Img src={process.env.PUBLIC_URL + "/img/hero-img2.jpg"} alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Text> */}
                        <Card body style={{ opacity: 0.9, marginTop: '120px', marginLeft: '90px', marginRight: '90px' }}>
                        <form className="m-3 mt-3 rounded" >
                            <ErrorMessage message={error} />
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                            </div>
                            <button className="btn btn-primary" onClick={event => handleSubmit(event)}>Login</button>
                            <br></br>
                            <Link to="/signup">New user? Sign up</Link>
                        </form>
                        </Card >
                    {/* </Card.Text> */}
                </Card.ImgOverlay>
            </Card>
    )
}

export default LoginForm;
