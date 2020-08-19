import React from 'react';
import "./Login.css";


const LoginForm = () => {
    return (
    <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <a href="../src/pages/Signup.js">New user? Sign up</a>
    </form>

    )
}

export default LoginForm;
