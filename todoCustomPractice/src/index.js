import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/app'
var root = document.getElementById('root')
import { createStore, applyMiddleware } from "redux"
import createLogger from 'redux-logger';
import { Provider } from "react-redux"
import allReducers from './reducers'
const logger = createLogger()
var store = createStore(
  allReducers,
  applyMiddleware(logger)
)


ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
  ,
  root
)