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
            <div>
                <h1>List test</h1>
                {this.props.list.map(item => {
                    return <Friend item={item} />
                })}
            </div>
        )
    }
}

export default FriendsList;