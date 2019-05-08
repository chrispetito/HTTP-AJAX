import React from 'react';

function Friend(props) {
    return (
        <div className = 'friend-container'>
            <h1>{props.item.name}</h1>
            <h2>AGE: {props.item.age}</h2>
            <h2>EMAIL: {props.item.email}</h2>

        </div>

    )
}

export default Friend;