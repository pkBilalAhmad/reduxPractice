import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((i)=>(
                        <li key={i.id}>{i.text}</li>
                    ))
                }
            </ul>
        );
    }
}


class Todo extends Component {
    render() {
        return (
            <div>
                <input type="text" id='input' autoFocus/>
                <button onClick={
                    ()=>{
                        return this.props.clickToAdd()
                    }
                }>Add Item</button>
                <TodoList items={this.props.items}/>
            </div>
        );
    }
}

export default Todo;