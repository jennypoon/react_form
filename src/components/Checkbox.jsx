import React, { Component } from 'react';


class Checkbox extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
    }
  }

  toggleCheckboxChange = (event) => {
    let isChecked = this.state.isChecked
    let name = event.target.name
    let value = event.target.value
    const { handleCheckboxChange, label } = this.props;

    this.setState({
      name: name,
      value: value,
      isChecked: !isChecked
    }, () => {
      if (isChecked === false) {
        this.props.draftQuote(this.state.name, this.state.value)
      } else {
        this.props.draftQuote(this.state.name, 0)
      }
    });
    handleCheckboxChange(label);
  }

  render() {
    const { name } = this.props.label;
    const { label } = this.props
    const { isChecked } = this.state;
    const item = name.charAt(0).toUpperCase() + name.slice(1).replace("_", " ")

    return (
        <label>
          <input
            id={label.key}
            name={label.name}
            type="checkbox"
            value={label.value}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="optionItem"><strong>{item} - ${label.value}</strong></span>
          <p className="optionItemDesc">{label.description}</p>
        </label>
    );
  }
}

export default Checkbox;