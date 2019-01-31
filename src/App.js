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
      name: 0
    }
    this.handleCheckedBox = this.handleCheckedBox.bind(this)
    this.quoteStates = this.quoteStates.bind(this)
  }

  quoteStates(item, value) {
    console.log("QUOTE STATE - ITEM, VALUE", item, value)
    this.setState({ [item]: value})

  }

  handleCheckedBox(item, value) {
    this.setState({ [item]: value})
  }
  render() {
    return (
      <div>
        <DraftQuote formState={this.state} handleCheckedBox={this.handleCheckedBox}/>
        <Tracker />
        <Form quoteState={this.quoteStates}/>
        <Summary />
      </div>
    );
  }
}

export default App;
