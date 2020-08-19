import React from 'react';
import "./SignUp.css";
import { ADD_USER } from '../../utils/actions';


function SignUp() {
    const username = userRef()
    const password = passRef()

    const handleSubmit = event => {
        event.preventDefault();

        signUp(username.current.value, password.current.value).then(response => {
            username.current.value = ""
            password.current.value = ""

            dispatch({ type: ADD_USER, results: response.data })
        })
    }


    return (
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">This will be used to login to Chore Hacker</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Create Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Agree to Terms and Conditions</label>
            </div>
            <button type="button ml-2" className="btn btn-success" onClick={event => handleSubmit(event)}>Submit</button>
        </form>

    );
}

export default SignUp;