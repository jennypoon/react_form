import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.jsx'
import Tracker from './components/Tracker.jsx'
import Summary from './components/Summary.jsx'
// import DraftQuote from './components/Draftquote.jsx'

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


//ON SUBMIT OF SELECTION COMPONENT
  finalSelection(quote) {
    console.log("FINAL SELECTION IN APP.jS", quote)
    this.setState({finalSelection: quote, activeSection: 3})
  }

//ON SUBMIT OF PROFILE COMPONENT
  profileState(profile) {
    console.log("PROFILE IN APP.JS", profile)
    this.setState({profileInfo: profile, activeSection: 2})
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
        <Summary />
      </div>
    );
  }
}

export default App;
