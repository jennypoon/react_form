import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.jsx'
import Tracker from './components/Tracker.jsx'
import Summary from './components/Summary.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div id="overlay"></div>
        <Tracker />
        <Form />
        <Summary />
      </div>
    );
  }
}

export default App;
