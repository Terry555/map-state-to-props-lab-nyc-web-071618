import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {this.props.users.map((user,idx) => <li key={idx}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}


export default connect(mapStateToProps)(Users)
