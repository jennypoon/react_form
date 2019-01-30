import React, { Component } from 'react';


class Draft extends Component {
  constructor() {
    super()
    this.createList = this.createList.bind(this)
  }

  createList(obj) {
    // console.log("DRAFT QUOTE", obj)
    delete obj[0].selectedOption
    delete obj[0].active

    for (const key in obj[0]) {
      let value = obj[0][key]
      // console.log("VALUE", value)

      let item = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")
      // console.log("ITEM", item)
    }
    // Object.entries(obj).forEach((entry) => {
    //   let key = entry[0]
    //   let value = entry[1]
    //   console.log("I", i)
    // })
  }

  render() {
    return (
      <div className="draft_container">
        <h1>Draft Quote</h1>
        {this.createList([this.props.formState])}
      </div>
    )
  }
}

export default Draft;