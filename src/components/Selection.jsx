import React, { Component } from 'react';
import Draft from './Draftquote.jsx';
import CheckboxTwo from './CheckboxForm.jsx'

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      active: false,
    };

    this.toggle = this.toggle.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleCheckedBox = this.handleCheckedBox.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }

  // handleChange(event) {
  //   event.preventDefault();
  //     console.log("TESTING")
  //     console.log("PROPS",this.props)
  //     this.setState({[event.target.name]: event.target.value});
  //     this.props.quoteState(event.target.name, event.target.value)
  // }

  handleCheckedBox(item, value) {
    this.setState({ [item]: value})
    this.props.quoteState(item, value)

  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    console.log("SELECTION", this.props)
    return (
        <div className="container">
        <form>
          <ul className="flex-outer">
              <h2>Checkboxes</h2>
              <CheckboxTwo handleCheckedBox={this.handleCheckedBox}/>
          </ul>
              <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}

export default Selection;