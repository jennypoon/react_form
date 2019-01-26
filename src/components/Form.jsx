import React, { Component } from 'react';
// import Accordian from './Accordian.jsx';
import Profile from './Profile.jsx';
import Selection from './Selection.jsx';
import Checkout from './Checkout.jsx';



class Form extends Component {

  render() {
    return (
      <div className="form_container">
        <Profile />
        <Selection />
        <Checkout />
      </div>
    )
  }
}

export default Form;