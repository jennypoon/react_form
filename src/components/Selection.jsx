import React, { Component } from 'react';
import Draft from './Draftquote.jsx';
import CheckboxTwo from './CheckboxForm.jsx'

class Selection extends Component {
  constructor() {
    super();
    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//SEND TO DRAFT QUOTES
  handleCheckedBox(item, value) {
    this.setState({ [item]: value})
    this.props.quoteState(item, value)
  }

//SEND TO REVIEW COMPONENT
  handleSubmit(event) {
    event.preventDefault();
    let location = event.target.name
    if (location === "edit") {
      this.props.handleRedirect(1)
    } else {
      this.props.finalSelectionState(this.state)
    }
  }

  render() {
    return (
        <div className="container">
        <form>
          <ul className="flex-outer">
              <h2>Checkboxes</h2>
              <CheckboxTwo handleCheckedBox={this.handleCheckedBox}/>
          </ul>
              <button name="review" type="submit" onClick={this.handleSubmit}>Review Order</button>
        </form>
      </div>
      )
  }
}

export default Selection;