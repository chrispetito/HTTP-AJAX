import React from 'react';
import Friend from './Friend';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.list
        }
    }

    render() {
        return(
            <div className='friends-list'>
                {this.props.list.map(item => {
                    return <Friend item={item} key={item.id} deleteFriend={this.deleteFriend}/>
                })}
            </div>
        )
    }
}

export default FriendsList;