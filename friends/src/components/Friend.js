import React from 'react';

function Friend(props) {
    return (
        <div>
            <h1>{props.item.name}</h1>
            <h2>{props.item.age}</h2>
            <h2>{props.item.email}</h2>

        </div>

    )
}

export default Friend;