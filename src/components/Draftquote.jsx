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
    delete obj.activeSection
    delete obj.profileInfo
    delete obj.finalSelection
    console.log("OBJ CREATE LIST", obj)
    return Object.keys(obj).map(function(key, keyIndex) {
      let value = parseInt(obj[key])
      let item = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")

      if (value !== 0) {
        return (
          <tr>
            <td style={{width: '3%'}}>{item}</td>
            <td style={{width: '1%'}}>${value}</td>
          </tr>
        )}
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
      return (
        <tr>
          <td style={{width: '50%'}}>Total</td>
          <td style={{width: '12.2%'}}>${total}</td>
        </tr>)
     }

  render() {
    const {formState} = this.props
    var length = Object.keys(formState).length;
    console.log("LENGTH", length)

    return (
      <section className="draft_container">
        <h3>Cost Estimation</h3>
        <p> Your Items </p>
        { (length > 4) ? this.createList(formState) : "You haven't selected anything"}
        <hr/>
        { (length > 4) ? this.calculateTotal(formState) : ""}
      </section>
    )
  }
}

export default Draft;