import React from 'react';
import "./style.css";

function ErrorMessage({ message }) {
    return (
        message ? <div className="alert alert-danger">{message}</div> : null
    );
}

export default ErrorMessage;
