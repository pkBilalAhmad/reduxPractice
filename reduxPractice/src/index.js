import React from 'react';
import ReactDOM from 'react-dom'
var root = document.getElementById('root')
import Todo from './components/app'
import store from './app'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Todo />
   </Provider>

  ,
  root
)