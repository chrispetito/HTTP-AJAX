import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: this.props.item.name,
                email: this.props.item.email,
                age: this.props.item.age
            }
        }
    }


    render() {
        return (
            <div className = 'friend-container'>
            
                <h1 className='name-box'>{this.props.item.name}</h1>
                <h2 className='age-box'>AGE: {this.props.item.age}</h2>
                <h2 className='email-box'>EMAIL: {this.props.item.email}</h2>
    
            </div>
    
        )
    }

}

export default Friend;