import React, { Component } from 'react';

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      active: false
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
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
        const activeClass = this.state.active ? "active" : "inactive";

    return (
      <div className="container">
      <form>
        <ul className="flex-outer">
          <li>
            <h2>Checkboxes</h2>
            <div className="inputGroup option">
              <input id="option1" name="option1" type="checkbox"/>
              <label for="option1">Option One</label>
            </div>

            <div className="inputGroup option">
              <input id="option2" name="option2" type="checkbox"/>
              <label for="option2">Option Two</label>
            </div>

            <div className="inputGroup">
              <input id="option3" name="option3" value="700" type="checkbox"/>
              <label for="option3">
                <h3>Option Three</h3>
                <li>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</li>
                <li>COST: $700.00 </li>
              </label>
             </div>

            <div className="inputGroup">
              <input id="option4" name="option4" value="500" type="checkbox"/>
              <label for="option4">
                  <h3>Option Four</h3>
                  <li>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </li>
                  <li>COST: $500.00 </li>
             </label>
            </div>

            <div className="inputGroup">
              <input id="option5" name="option5" value="350" type="checkbox"/>
              <label for="option5">
                  <h3>Option Five</h3>
                  <li>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </li>
                  <li>COST: $350.00 </li>
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