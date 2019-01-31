import React, { Component } from 'react';
import Profile from './Profile.jsx';
import Selection from './Selection.jsx';
import Checkout from './Checkout.jsx';
import { Accordion, AccordionItem } from 'react-light-accordion';

class Form extends Component {

  render() {
    return (
      <div className="form_container">
        <Accordion atomic={true}>

          <AccordionItem title="Profile">
            <Profile />
          </AccordionItem>

          <AccordionItem title="Selection">
            <Selection quoteState={this.props.quoteState}/>
          </AccordionItem>

          <AccordionItem title="Review">
            <Checkout />
          </AccordionItem>

        </Accordion>
      </div>
    )
  }
}

export default Form;