import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const activePage = (state = 1, action) => {
  switch(action.type) {
    case 'SET_NEXT_PAGE':
     return state = state + 1
    case 'SET_PREV_PAGE':
      return state = state - 1
    default:
      return state
  }
}


const store = createStore(activePage);


ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
