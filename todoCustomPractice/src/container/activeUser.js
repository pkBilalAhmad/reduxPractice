import React, { Component } from 'react';
import { connect } from 'react-redux'
class UserData extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.age}</h2>
                <h2>{this.props.user.city}</h2>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user : state.activeUser
    }
}

export default connect(mapStateToProps)(UserData);