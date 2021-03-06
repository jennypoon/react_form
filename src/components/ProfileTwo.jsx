import React, { Component } from 'react';
import {validateEmail, validatePhone} from '../dataHelper.js'


class FormTwo extends Component {
      constructor() {
      super();
      this.state = {
          email: '',
          phone: 0,
          error: false,
          business_Address: '',
          business_Name: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleBlur(event) {
    if (event.target.name === "email") {
      if (validateEmail(event.target.value)) {
        this.props.handleError("emailError", 0)
      } else {
        this.props.handleError("emailError", 1)
      }
    } else if (event.target.name === "phone") {
      if (validatePhone(event.target.value)) {
        this.props.handleError("phoneError", 0)
      } else {
        this.props.handleError("phoneError", 1)
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.emailError || this.props.phoneError || this.state.email === "" || this.state.phone === 0 || this.state.business_Name === '' || this.state.business_Address === '') {
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
        {this.state.error ? (<p className="error"> Error in entry - Missing Information Below</p>) : ""}
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
          <li><h3 className="section"> Business Information</h3></li>
          <li>
            <label htmlFor="business-name">Business Name<sup>*</sup></label>
            <input type="text" name="business_Name" id="business-name"
                  onChange={this.handleChange}
                  placeholder="Enter your first name here"
                  required/>
          </li>
          <li>
            <label htmlFor="business-address">Business Address<sup>*</sup></label>
            <input type="text" name="business_Address" id="business-address"
                  onChange={this.handleChange}
                  placeholder="Enter your first name here"
                  required/>
          </li>
            <label htmlFor="question">
              <label> Question: </label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</p></label>
            <textarea rows="6" id="question_One" onChange={this.handleChange} placeholder="Enter your answer here"></textarea>

            <label htmlFor="question">
              <label> Question: </label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique?</p></label>
            <textarea rows="4" id="question_Two" onChange={this.handleChange} placeholder="Enter your answer here"></textarea>
        </ul>
        <button type="submit" onClick={this.handleSubmit}>Next Section</button>
      </form>
    </div>
  )}
}


export default FormTwo