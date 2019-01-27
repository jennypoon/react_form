import React, { Component } from 'react';
import {validateEmail, validatePhone} from '../dataHelper.js'

class FormOne extends Component {
    constructor() {
      super();
      this.state = {
          email: '',
          phone: 0,
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  }

  handleBlur(event) {
    if (validateEmail(event.target.value)) {
      this.props.handleError("email", 0)
    } else {
      this.props.handleError("email", 1)
    }
  }

  // validateEmail(input) {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(input).toLowerCase());
  // }


  render() {
    return (
     <div className="container">
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name"
                    onChange={this.handleChange}
                    placeholder="Enter your first name here"
                    required/>
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" onChange={this.handleChange} placeholder="Enter your last name here" required/>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    placeholder="Enter your email here" required/>
          </li>
          <label  className={this.props.emailError === false ? "notError" : "error"} > Error - Please insert a valid email</label>

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