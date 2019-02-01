import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.jsx'
import Tracker from './components/Tracker.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeSection: 1,
      profileInfo: null,
      finalSelection: null
    }

    this.profileState = this.profileState.bind(this)
    this.finalSelection = this.finalSelection.bind(this)
  }

//ON SUBMIT OF PROFILE COMPONENT
  profileState(profile) {
    this.setState({profileInfo: profile, activeSection: 2})
  }

//ON SUBMIT OF SELECTION COMPONENT
  finalSelection(quote) {
    this.setState({finalSelection: quote, activeSection: 3})
  }

  render() {
    return (
      <div>
        <Tracker />
        <Form
              profileState={this.profileState}
              finalSelectionState={this.finalSelection}
              activeSection={this.state.activeSection}
              profile={this.state.profileInfo}
              finalSelection={this.state.finalSelection}
              />
      </div>
    );
  }
}

export default App;
