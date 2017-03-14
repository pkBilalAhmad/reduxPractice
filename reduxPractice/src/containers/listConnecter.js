import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import userAction from '../actions/user-action'
class NewList extends Component {
    ListItems() {
        return this.props.List.map((i) => (
            <li key={i.id} onClick={
                ()=>this.props.userAction(i)
            }> User Name = {i.name} <br /> Age = {i.age}</li>
        ))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.ListItems()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        List: state.list
    })
} 

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userAction: userAction }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewList);