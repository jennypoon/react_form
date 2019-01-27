import React, { Component } from 'react';

class Checkout extends Component {
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

  handleSubmit() {

  }

  render() {
        const activeClass = this.state.active ? "active" : "inactive";

    return (
      <div>
        <div className={activeClass}>
          <span className="header" onClick={this.toggle}>3. Review</span>
          <span className="folding-panel answer">
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
              <button className="rsvpButton" onClick={this.handleSubmit}> Submit </button>
            </form>
      )}

          </span>
        </div>
      </div>

      )
  }
}

export default Checkout;