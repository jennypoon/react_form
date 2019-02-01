import React, { Component } from 'react';
import {validateEmail, validatePhone} from '../dataHelper.js'

class FormOne extends Component {
    constructor() {
      super();
      this.state = {
          email: '',
          phone: 0,
          error: false

      };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //FORM INPUTS
  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }


  //EMAIL AND PHONE VALIDATION
  handleBlur(event) {
    if (event.target.name === "email") {
      if (validateEmail(event.target.value)) {
        this.props.handleError("emailError", 0)
      } else {
        this.props.handleError("emailError", 1)
      }
    } else {
      if (validatePhone(event.target.value)) {
        this.props.handleError("phoneError", 0)
      } else {
        this.props.handleError("phoneError", 1)
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.emailError || this.props.phoneError || this.state.email === "" || this.state.phone === 0) {
      this.setState({error: true})
    } else {
      this.props.profileState(this.state)
      this.props.updateDraftStage(true)
      this.setState({error: false})
    }
  }

  render() {
    return (
     <div className="container">
      <form>
        <ul className="flex-outer">
        {this.state.error ? (<p className="error"> Error in entry - please review the form below</p>) : ""}
          <li>
            <label htmlFor="first-name">First Name<sup>*</sup></label>
            <input type="text" name="first_Name" id="first-name"
                    onChange={this.handleChange}
                    placeholder="Enter your first name here"
                    required/>
          </li>
          <li>
            <label htmlFor="last-name">Last Name<sup>*</sup></label>
            <input type="text" name="last_Name" id="last-name" onChange={this.handleChange} placeholder="Enter your last name here" required/>
          </li>
          <li>
            <label htmlFor="email">Email<sup>*</sup></label>
            <input type="email" name="email" id="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    placeholder="Enter your email here" required/>
          </li>
          <p  className={this.props.emailError === false ? "notError" : "error"} > Error - Please insert a valid email</p>

          <li>
            <label htmlFor="phone">Phone<sup>*</sup></label>
            <input type="tel" name="phone" id="phone"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    placeholder="Enter your phone here" required/>
          </li>
          <p  className={this.props.phoneError === false ? "notError" : "error"} > Error - Please insert a valid phone number</p>
          <button type="submit" onClick={this.handleSubmit}>Next Section</button>
          {(this.props.submittedState) ? (<button type="submit" onClick={this.handleSubmit}>Back To Checkout</button>) : "" }

        </ul>
      </form>
    </div>
  )}
}


export default FormOne