import React from "react";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "",
        email: "",
        age: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      person: {
          ...this.state.person,
        [event.target.name]: event.target.value
      }
    });
  };

  postFriend = event => {
    event.preventDefault();
    this.props.postFriend(this.state.person);
  };

  render() {
    return (
      <form onSubmit={this.postFriend}>
        <h2>Add Friend</h2>
        <input name="name" placeholder="NAME" onChange={this.handleChange} value={this.state.person.name}/>
        <input name="email" placeholder="EMAIL" onChange={this.handleChange} value={this.state.person.email}/>
        <input name="age" placeholder="AGE" onChange={this.handleChange} value={this.state.person.age}/>
        <button>Add Friend</button>
      </form>
    );
  }
}

export default FriendForm;
