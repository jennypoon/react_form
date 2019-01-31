import React, { Component } from 'react';
import Draft from './Draftquote.jsx';
import CheckboxTwo from './CheckboxForm.jsx'

class Selection extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.toggle = this.toggle.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }

  handleCheckedBox(item, value) {
    this.setState({ [item]: value})
    this.props.quoteState(item, value)
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("HANDLESUBMIT, SELECTION", this.state)
    this.props.finalSelectionState(this.state)
  }

  render() {
    return (
        <div className="container">
        <form>
          <ul className="flex-outer">
              <h2>Checkboxes</h2>
              <CheckboxTwo handleCheckedBox={this.handleCheckedBox}/>
          </ul>
              <button type="submit" onClick={this.handleSubmit}>Review Order</button>
        </form>
      </div>
      )
  }
}

export default Selection;