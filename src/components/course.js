import React from 'react';

import WrappedLink from './wrappedLink';

const course = (props) => {
    return (
        <li className="course">
            <strong>{props.title}</strong>
            <WrappedLink
                to={'/courses/' + props.id}
                buttonClasses={['btn', 'btn-info', 'ViewButton']}>View</WrappedLink>
        </li>
    );
}

export default course;