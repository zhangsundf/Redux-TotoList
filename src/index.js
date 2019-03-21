import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
