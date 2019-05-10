import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';

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

  deleteFriend = (event, id) => {
    event.preventDefault()
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      console.log(res)
      this.setState({ items: res.data })
    })
  }

  render() {
    console.log('app params', this.props.match)
    return (
      <div className="App">
        <FriendsList list={this.state.items} deleteFriend={this.deleteFriend}/>
        <FriendForm postFriend={this.postFriend} deleteFriend={this.deleteFriend}/>
        {/* <Route path='' render={props => <Friend {...props} props={this.props}/>} /> */}
      </div>
    );
  }

}

export default App;