import React from 'react';

import WrappedLink from './wrappedLink';

const Article = (props) => {
    return (
        <li className="Article">
            <strong>{props.title}</strong>
            <WrappedLink
                to={'/articles/' + props.id}
                buttonClasses={['btn', 'btn-info', 'ViewButton']}>View</WrappedLink>
        </li>
    );
}

export default Article;