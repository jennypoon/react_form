import React, { Component } from 'react';

class AccordionItem extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }

  render() {
    const activeClass = this.state.active ? "active" : "inactive";

    const question = this.props.details;

    return (
            <div className={activeClass} onClick={this.toggle}>
              <span className="summary">{question.summary}</span>
              <span className="folding-panel answer">{question.answer}</span>
            </div>
    );
  }
}

export default AccordionItem;