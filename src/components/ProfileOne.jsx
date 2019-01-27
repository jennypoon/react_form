import React, { Component } from 'react';

class FormOne extends Component {
    constructor() {
      super();
      this.state = {
        // active: false
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  }

  render() {
    return (
     <div className="container">
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" onChange={this.handleChange} placeholder="Enter your first name here" required/>
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" onChange={this.handleChange} placeholder="Enter your last name here" required/>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Enter your email here" required/>
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" onChange={this.handleChange} placeholder="Enter your phone here" required/>
          </li>

            <button type="submit">Submit</button>
        </ul>
      </form>
    </div>
  )}
}


export default FormOne