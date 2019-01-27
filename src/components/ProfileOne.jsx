import React, { Component } from 'react';

class FormOne extends Component {

  render() {
    return (
     <div className="container">
      <form>
        <ul className="flex-outer">
          <li>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="Enter your first name here"/>
          </li>
          <li>
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Enter your last name here"/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email here"/>
          </li>
          <li>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter your phone here"/>
          </li>

            <button type="submit">Submit</button>
        </ul>
      </form>
    </div>
  )}
}


export default FormOne