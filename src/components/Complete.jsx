import React, { Component } from 'react';

class Tracker extends Component {
  constructor() {
    super()

    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(event) {
    this.props.handleRedirect(1)
    this.props.updateCompletion(false)
  }

  render() {
    return (
      <div className="form_container">
        <div className="completion">
          <p>Thank you! Your request is currently being processed</p>
          <button name="profile" type="submit" onClick={this.handleEdit}>Start Over</button>
        </div>
</div>
      )
  }
}

export default Tracker;