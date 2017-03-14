import React, { Component } from 'react';
import { connect } from 'react-redux'
import selectUser from '../action/selectUser'
import { bindActionCreators } from 'redux';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.users.map((user) => (
                            <li key={user.id} onClick={
                                () => this.props.selectUser(user)
                            }>
                                {user.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.userList
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(App);