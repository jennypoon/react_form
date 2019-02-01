import React, { Component } from 'react';
import Profile from './Profile.jsx';
import Selection from './Selection.jsx';
import Review from './Review.jsx';
import { Accordion, AccordionItem } from 'react-light-accordion';
import DraftQuote from './Draftquote.jsx';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      testing: 0
    }

    this.quoteStates = this.quoteStates.bind(this)

  }

  quoteStates(item, value) {
    this.setState({[item]: value})
  }

  render() {
    return (
      <div>
        <div>
          <DraftQuote formState={this.state}/>
        </div>
        <div className="form_container">
          <Accordion atomic={true}>

            <AccordionItem title="Profile">
              <Profile profileState={this.props.profileState}/>
            </AccordionItem>

            <AccordionItem title="Selection">
              <Selection quoteState={this.quoteStates}
                         finalSelectionState={this.props.finalSelectionState}/>
            </AccordionItem>

            <AccordionItem title="Review">
              <Review profile={this.props.profile}
                      finalSelection={this.props.finalSelection}/>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    )
  }
}

export default Form;