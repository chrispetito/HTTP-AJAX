import React from 'react';
import Friend from './Friend';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return(
            <div className='friends-list'>
                {this.props.list.map(item => {
                    return <Friend item={item} key={item.id} />
                })}
            </div>
        )
    }
}

export default FriendsList;