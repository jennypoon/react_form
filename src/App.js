import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeSection: 1,
      profileInfo: null,
      finalSelection: null,
      draftQuote: false,
      complete: false
    }

    this.profileState = this.profileState.bind(this)
    this.finalSelection = this.finalSelection.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.updateDraftStage = this.updateDraftStage.bind(this)
    this.updateCompletionStatus = this.updateCompletionStatus.bind(this)
  }

//ON SUBMIT OF PROFILE COMPONENT
  profileState(profile) {
    this.setState({profileInfo: profile, activeSection: 2})
  }

//ON SUBMIT OF SELECTION COMPONENT
  finalSelection(quote) {
    this.setState({finalSelection: quote, activeSection: 3})
  }

//HANDLE EDITS
  handleRedirect(location) {
    this.setState({activeSection: location})
  }

  updateDraftStage(e) {
    this.setState({draftQuote: e})
  }

  updateCompletionStatus(e) {
    this.setState({complete: e})
  }


  render() {
    return (
      <div>
        <Form handleRedirect={this.handleRedirect}
              profileState={this.profileState}
              finalSelectionState={this.finalSelection}
              activeSection={this.state.activeSection}
              profile={this.state.profileInfo}
              finalSelection={this.state.finalSelection}
              draftStage={this.state.draftQuote}
              updateDraftStage={this.updateDraftStage}
              updateCompletion={this.updateCompletionStatus}
              completion={this.state.complete}
              />
      </div>
    );
  }
}

export default App;
