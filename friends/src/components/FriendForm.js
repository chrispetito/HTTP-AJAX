import React from 'react' 

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
                <form>
                    <h2>Add Friend</h2>
                    <input placeholder='NAME'></input>
                    <input placeholder='EMAIL'></input>
                    <input placeholder='AGE'></input>
                    <button>Add Friend</button>
                </form>
        )
    }
}

export default FriendForm;