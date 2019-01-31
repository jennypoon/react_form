import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.jsx'
import Tracker from './components/Tracker.jsx'
import Summary from './components/Summary.jsx'
import DraftQuote from './components/Draftquote.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 0,
      activeSection: 1,
      profileInfo: null,
      finalSelection: null
    }
    this.handleCheckedBox = this.handleCheckedBox.bind(this)
    this.quoteStates = this.quoteStates.bind(this)
    this.profileState = this.profileState.bind(this)
    this.finalSelection = this.finalSelection.bind(this)
  }

  quoteStates(item, value) {
    this.setState({ [item]: value})
  }

  finalSelection(quote) {
    console.log("FINAL SELECTION IN APP.jS", quote)
    this.setState({finalSelection: quote, activeSection: 3})
  }

  profileState(profile) {
    console.log("PROFILE IN APP.JS", profile)
    this.setState({profileInfo: profile, activeSection: 2})
  }

  handleCheckedBox(item, value) {
    this.setState({ [item]: value})
  }

  render() {
    console.log("STATE IN APP.JS", this.state)
    return (
      <div>
        <DraftQuote formState={this.state} handleCheckedBox={this.handleCheckedBox}/>
        <Tracker />
        <Form quoteState={this.quoteStates}
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
