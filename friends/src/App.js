import React from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then((res) => {
      console.log(res);
      this.setState({
        items: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  postFriend = person => {
    axios
    .post('http://localhost:5000/friends', person)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <FriendsList list={this.state.items}/>
        <FriendForm postFriend={this.postFriend}/>
      </div>
    );
  }
  
}

export default App;
