import React from 'react';
import { Link } from 'react-router-dom';


const WrappedLink = (props) => {
    return (
        <Link to={props.to} className="WrappedLink">
            <button
                className={[...props.buttonClasses, "WrappedButton"].join(' ')}
                onClick={props.onClick}>
                {props.children}</button>
        </Link>
    );
}

export default WrappedLink;