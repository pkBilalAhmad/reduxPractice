import React, { Component } from 'react';
import { connect } from "react-redux"
class ActiveUser extends Component {
    render() {
        return (
            <div>
                <img src="" alt=""/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        List: state.activeUser
    })
} 

export default connect(mapStateToProps)(ActiveUser);