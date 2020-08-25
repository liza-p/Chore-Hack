// import React from "react";
import React, { useRef, useState } from 'react';
// import { Link } from "react-router-dom";
import { Jumbotron, InputGroup, FormControl, Button, Toast } from "react-bootstrap";
import "./style.css";
import { useChoreContext } from "../../utils/GlobalState";
import JoinBtn from "../Invite/modal";


function Code() {
    const state = useChoreContext()[0];
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
// copy function
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
      };
    
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
                        ref={textAreaRef}
                        value= {state.inviteCode}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />

                {
                document.queryCommandSupported('copy') &&
                    <div>
                    <Button onClick={copyToClipboard}>Copy</Button> 
                    {copySuccess}
                    </div>
                }

                {/* <InputGroup.Text id="inputGroup-sizing-default" className="ml-2" >Copy</InputGroup.Text> */}
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