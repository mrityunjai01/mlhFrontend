import React from 'react';


const ErrorMsg = (props) => {
    return (
        <small className="ErrorMsg">{props.msg}</small>
    );
};

export default ErrorMsg;