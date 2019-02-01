import React, { Component } from 'react';
import FormOne from './ProfileOne.jsx'
import FormTwo from './ProfileTwo.jsx'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      emailError: false,
      phoneError: false,
      // submitted: false
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleError = this.handleError.bind(this);
    // this.haveSubmitted = this.haveSubmitted.bind(this);
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value,
                    emailError: false,
                    phoneError: false });
  }

  handleError(event, num) {
    if (num === 1) {
      this.setState({[event]: true});
    } else {
      this.setState({[event]: false});
    }
  }

  // haveSubmitted(e) {
  //   //Goal: have order button available so they can return back to checkout
  //   // if (this.state.emailError && this.state.phoneError) {
  //     this.setState({submitted: true})

  //   // }
  //   console.log("FORM ONE SUBMITTED NOW TRUE")
  // }

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
              profileState={this.props.profileState}
              handleError={this.handleError}
              emailError={this.state.emailError}
              phoneError ={this.state.phoneError}
              />
            ) : (
            <FormTwo
              profileState={this.props.profileState}
              handleError={this.handleError}
              emailError={this.state.emailError}
              phoneError ={this.state.phoneError}
              />
          )}
        </div>
      </div>

      )
  }
}

export default Profile;