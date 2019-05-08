import React from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';

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

  render() {
    return (
      <div className="App">
        <h1>friends test</h1>
        <FriendsList list={this.state.items}/>
      </div>
    );
  }
  
}

export default App;
