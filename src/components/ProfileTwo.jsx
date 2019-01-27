import React, { Component } from 'react';

class FormTwo extends Component {
  constructor() {
    super();

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
     <div className="container">
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" onChange={this.handleChange} placeholder="Enter your first name here"/>
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" onChange={this.handleChange} placeholder="Enter your last name here"/>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} placeholder="Enter your email here"/>
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" onChange={this.handleChange} placeholder="Enter your phone here"/>
          </li>

            <label htmlFor="question">
              <label> Question: </label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</p></label>
            <textarea rows="6" id="questionOne" onChange={this.handleChange} placeholder="Enter your answer here"></textarea>

            <label htmlFor="question">
              <label> Question: </label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique?</p></label>
            <textarea rows="5" id="questionTwo" onChange={this.handleChange} placeholder="Enter your answer here"></textarea>
        </ul>
            <button type="submit">Submit</button>
      </form>
    </div>
  )}
}


export default FormTwo