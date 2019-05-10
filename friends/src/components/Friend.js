// import React from 'react';
// import Axios from 'axios';

// class Friend extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: null
//         }
//     }

//     componentDidMount() {
//         const id = 
//         Axios
//         .get(`http://localhost:5000/friends/${id}`)
//         .then(res => {
//             console.log(res)
//             this.setState({ item: res.data})
//         })
//     }

//     deleteFriend = event => {
//         event.preventDefault();
//         this.props.deleteFriend(this.state.item.id);
//     }

//     render() {
//         return (
//             <div className = 'friend-container'>

//                 <h1 className='name-box'>{this.props.item.name}</h1>
//                 <h2 className='age-box'>AGE: {this.props.item.age}</h2>
//                 <h2 className='email-box'>EMAIL: {this.props.item.email}</h2>
//                 <button onClick={this.deleteFriend}>Delete</button>
//             </div>

//         )
//     }

// }

// export default Friend; 