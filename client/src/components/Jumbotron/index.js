import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, InputGroup, FormControl } from "react-bootstrap";
import "./style.css";
import { useChoreContext } from "../../utils/GlobalState";
import JoinBtn from "../Invite/modal";


function Code() {
    const state = useChoreContext()[0];
    return (
        <Jumbotron>
            <h1> {state.household} <span className="icon"><i className="fas fa-house-user"></i></span></h1>
            <div>
                <br />
                <InputGroup className="mb-3 w-50 mx-auto" >
                    <InputGroup.Prepend >
                    </InputGroup.Prepend>
                    <FormControl
                        readOnly
                        placeholder= {state.inviteCode}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                <InputGroup.Text id="inputGroup-sizing-default" className="ml-2" >Copy</InputGroup.Text>
                </InputGroup>
                <JoinBtn />
                <h5>Join a different Household</h5>
                <br />
                <h2>Members</h2>
            </div>
        </Jumbotron>
    );
};

export default Code;