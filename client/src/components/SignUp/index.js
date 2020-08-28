import React, { useRef, useState } from 'react';
import "./SignUp.css";
import ErrorMessage from "../ErrorMessage";
import API from "../../utils/API";
import { Card } from 'react-bootstrap';
import { useChoreContext } from "../../utils/GlobalState";
import refreshUserData from "../../utils/refreshUserData";
import { TwitterPicker } from "react-color";

function SignUpForm() {
    const [color, setColor] = useState();
    const handleChange = color => setColor(color);

    const dispatch = useChoreContext()[1];

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
            setError("Missing a required field.");
            passwordRef.current.value = "";
            return;
        }

        API.signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value, color.hex)
            .then(response => {
                setError(null);
                console.log(response);
                refreshUserData(dispatch);
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
                            <label htmlFor="inputName">Display Color</label>
                            <TwitterPicker color={color} onChangeComplete={handleChange} />
                            <small id="nameHelp" className="form-text text-muted">This will be your color for calendar and chore events</small>
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