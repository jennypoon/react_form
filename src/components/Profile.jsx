import React, { Component } from 'react';
import FormOne from './ProfileOne.jsx'
import FormTwo from './ProfileTwo.jsx'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      // active: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  toggle() {
    // this.setState({

    // });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
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
            <FormOne />
            ) : (
            <FormTwo />
          )}
        </div>
      </div>

      )
  }
}

export default Profile;