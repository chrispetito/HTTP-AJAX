import React from 'react';

function Friend(props) {
    return (
        <div className = 'friend-container'>
            <h1 className='name-box'>{props.item.name}</h1>
            <h2 className='age-box'>AGE: {props.item.age}</h2>
            <h2 className='email-box'>EMAIL: {props.item.email}</h2>

        </div>

    )
}

export default Friend;