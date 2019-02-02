import React, { Component } from 'react';
import Checkbox from './Checkbox.jsx';

const items = [
  {id: 1, name:'option_1', value: 100},
  {id: 2, name:'option_2', value: 200, description: "At vero eos et accusamus et iusto odio dignissi corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"},
  {id: 3, name:'option_3', value: 300, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 4, name:'option_4', value: 400, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},
  {id: 5, name:'option_5', value: 500, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  {id: 6, name:'option_6', value: 600, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];

class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      //UNCHECKED
      this.selectedCheckboxes.delete(label);
    } else {
      //CHECKED
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      draftQuote={this.props.handleCheckedBox}
      key={label.id}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="inputGroup">
          {this.createCheckboxes()}
      </div>
    );
  }
}

export default Application;