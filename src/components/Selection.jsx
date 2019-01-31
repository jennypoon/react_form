import React, { Component } from 'react';
import Draft from './Draftquote.jsx';
import CheckboxTwo from './CheckboxForm.jsx'

const items = [
  'One',
  'Two',
  'Three',
];


class Selection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      active: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
        const activeClass = this.state.active ? "active" : "inactive";

    return (
        <div className="container">
        <Draft formState={this.state}/>
        <form>
          <ul className="flex-outer">
            <li>
              <h2>Checkboxes</h2>
              <CheckboxTwo />

              <div className="inputGroup">
                <input id="option3" name="option_3" value="700" type="checkbox" onChange={this.handleChange}/>
                <label htmlFor="option3">
                  <h3>Option Three</h3>
                  <ul>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</ul>
                  <ul>COST: $700.00 </ul>
                </label>
               </div>

              <div className="inputGroup">
                <input id="option4" name="option_4" value="500" type="checkbox" onChange={this.handleChange}/>
                <label htmlFor="option4">
                    <h3>Option Four</h3>
                    <ul>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </ul>
                    <ul>COST: $500.00 </ul>
               </label>
              </div>

              <div className="inputGroup">
                <input id="option5" name="option_5" value="350" type="checkbox" onChange={this.handleChange}/>
                <label htmlFor="option5">
                    <h3>Option Five</h3>
                    <ul>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </ul>
                    <ul>COST: $350.00 </ul>
                </label>
              </div>

            </li>
            </ul>
              <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}

export default Selection;