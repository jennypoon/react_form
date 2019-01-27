import React, { Component } from 'react';
import FormOne from './ProfileOne.jsx'
import FormTwo from './ProfileTwo.jsx'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      emailError: false,
      phoneError: false
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleError = this.handleError.bind(this)
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleError(event, num) {
    let eventerr = event
    console.log("IN HANDLEERROR IN PARENT", event, num)
    if (num === 1) {
      this.setState({emailError: true });
      console.log("TRUE")
    } else {
      this.setState({emailError: false});
      console.log("FALSE")
    }
  }

  render() {

    return (
      <div>
        <div className="container">
        <span className="flex-outer"> I am: </span>
        <span>
          <label className="radio">

            <input type="radio" name="Customer" value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.handleOptionChange}
            />
            <span>Looking For A Quote</span>
          </label>
          <label className="radio">
            <input type="radio" name ="Salesman" value="0"
              checked={this.state.selectedOption === "0"}
              onChange={this.handleOptionChange}
            />
             Giving Out A Quote
          </label>
          </span>
          {this.state.selectedOption === "1" ? (
            <FormOne
              handleError={this.handleError}
              emailError={this.state.emailError}
              phoneError ={this.state.phoneError}
              />
            ) : (
            <FormTwo />
          )}
        </div>
      </div>

      )
  }
}

export default Profile;