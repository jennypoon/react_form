import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "1",
      active: false
    };

    this.toggle = this.toggle.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
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

  validateEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
  }

  render() {
    const activeClass = this.state.active ? "active" : "inactive";

    return (
      <div>
        <div className={activeClass}>
          <span className="header" onClick={this.toggle}>1. Profile</span>
          <span className="folding-panel answer">
            <h3>I am</h3>
            <label className="radio">
              <input type="radio" name="Customer" value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.handleOptionChange}
              />
               Looking For A Quote
            </label>
            <label className="radio">
            <input type="radio" name ="Salesman" value="0"
              checked={this.state.selectedOption === "0"}
              onChange={this.handleOptionChange}
            />
             Giving Out A Quote
          </label>

          {this.state.selectedOption === "1" ? (
            <form className="rsvpForm" onSubmit={this.handleSubmit}>
              <label className="rsvpColumn">
                First Name:
              </label>
              <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
                Last Name:
              </label>
              <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
                Your Email:
              </label>
              <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
               Street Address
              </label>
              <input className="rsvpColumn input" type="text" name="plusone" onChange={this.handleChange}></input><br/><br/>

              <label className="rsvpColumn">
               City
              </label>
              <input className="rsvpColumn input" type="text" name="guestNames" onChange={this.handleChange}></input><br/><br/>

               <label className="rsvpColumn">
                Province
              </label>
              <button className="rsvpButton" onClick={this.handleClick}> Next Section </button>
            </form>
            ) : (
            <div>
              <form className="rsvpForm" onSubmit={this.handleSubmit}>
                <label className="rsvpColumn">
                  First & Last Name:
                </label>
                <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

                <label className="rsvpColumn">
                  Your Email:
                </label>
                <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/><br/><br/>

                <button className="rsvpButton" onClick={this.handleClick}> Next Section </button>
              </form>
          </div>
      )}

          </span>
        </div>
      </div>

      )
  }
}

export default Profile;