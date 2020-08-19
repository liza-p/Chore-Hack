import React from 'react';
import "./SignUp.css";
import { ADD_USER } from '../../utils/actions';


function SignUp() {
    const username = userRef ()
    const password = passRef ()

    const handleSearch = event => {
        event.preventDefault ();

        signUp (username.current.value, password.current.value).then(response => {
            username.current.value = ""
            password.current.value = ""

            dispatch ({type: ADD_USER, results:response.data})
        })
    }


    return (
        <div>
            <form class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  
</form>
        </div>

    );
}

export default SignUp;