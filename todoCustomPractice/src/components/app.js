import React, { Component } from 'react';
import App from '../container/app'
import UserData from '../container/activeUser'


class Todo extends Component {
    render() {
        return (
            <div>
                <h2>User List</h2>
                <App />
                <h2>User Details</h2>
                <UserData/>
            </div>
        );
    }
}

export default Todo;
                // <List />