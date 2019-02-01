import React, { Component } from 'react';


class Review extends Component {
  constructor() {
    super()
    this.listProfile = this.listProfile.bind(this)
    this.listSelection = this.listSelection.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }


  listProfile(obj) {
    return Object.keys(obj).map(function(key) {
      let value = obj[key]
      let info = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")
      return (
          <tr>
              <td style={{width: '150px'}}> {info} </td>
              <td> {value} </td>
          </tr> )
    });
  }

  listSelection(obj) {
    return Object.keys(obj).map(function(key) {
      let value = obj[key]
      let info = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")
      return (
          <tr>
              <td style={{width: '150px'}}> {info} </td>
              <td> ${value} </td>
          </tr> )
    });
  }

  calculateTotal(obj) {
    let total = 0
    Object.keys(obj).map(function(key) {
      let value = parseInt(obj[key])
      total += value
    });

      return (
        <tr>
          <td style={{width: '150px'}}>Total</td>
          <td>${total}</td>
        </tr>)
     }

  handleEdit(event) {
    let location = event.target.name
    if (location === "profile") {
      this.props.handleRedirect(1)
    } else if (location === "order") {
      this.props.handleRedirect(2)
    }
  }

  render() {
    const { profile } = this.props
    const { finalSelection } = this.props

    return (
      <div className="summary_container">
        <h1>Review</h1>
        <h3> Your Details </h3>
        {(profile === null) ? "" : this.listProfile(profile)}
        <button name="profile" type="submit" onClick={this.handleEdit}>Edit</button>
        <h3> Your Order </h3>
        { (finalSelection === null) ? "" : this.listSelection(finalSelection) }
        <button name="order" type="submit" onClick={this.handleEdit}>Edit</button>
        <hr/>
        { (finalSelection === null) ? "" : this.calculateTotal(finalSelection)}

      </div>
    )
  }
}

export default Review;