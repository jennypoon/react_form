import React, { Component } from 'react';

class Draft extends Component {
  constructor() {
    super()
    this.createList = this.createList.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
    this.createListings = this.createListings.bind(this)
  }

  createList(obj) {
    delete obj.selectedOption
    delete obj.active
    return Object.keys(obj).map(function(key, keyIndex) {
      let value = parseInt(obj[key])
      let item = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")

      if (value !== 0) {
        return <p>{item}: ${value}</p>
      }
    })
  }

  createListings(item, value) {
    return <p> item </p>
  }

  calculateTotal(obj) {
    delete obj.selectedOption
    delete obj.active
    let total = 0

    Object.keys(obj).map(function(key) {
      let value = parseInt(obj[key])
      total += value
    });
   return total
 }

  render() {

    return (
      <div className="draft_container">
        <h1>Draft Quote</h1>
        <p> Your Selection </p>
        {this.createList(this.props.formState)}
        <p> Total = ${this.calculateTotal(this.props.formState)} </p>
      </div>
    )
  }
}

export default Draft;