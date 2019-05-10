import React from "react";
import Friend from "./Friend";
import axios from "axios";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    // console.log("params", this.props.match.params);
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log("res", res);
        this.setState({ items: res.data });
      });
  }

//   deleteFriend = event => {
//     event.preventDefault();
//     this.props.deleteFriend(this.state.items.item.id);
//   };

  render() {
    return (
      <div className="friends-list">
        {this.props.list.map(item => {
          return (
            <div className="friend-container">
              <h1 className="name-box">{item.name}</h1>
              <h2 className="age-box">AGE: {item.age}</h2>
              <h2 className="email-box">EMAIL: {item.email}</h2>
              <button className="delete-button" onClick={event => this.props.deleteFriend(event, item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
