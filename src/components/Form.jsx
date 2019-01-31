import React, { Component } from 'react';
import Profile from './Profile.jsx';
import Selection from './Selection.jsx';
import Review from './Review.jsx';
import { Accordion, AccordionItem } from 'react-light-accordion';

class Form extends Component {

  render() {
    console.log("FORM PROPS", this.props)
    return (
      <div className="form_container">
        <Accordion atomic={true}>

          <AccordionItem title="Profile">
            <Profile profileState={this.props.profileState}/>
          </AccordionItem>

          <AccordionItem title="Selection">
            <Selection quoteState={this.props.quoteState}
                       finalSelectionState={this.props.finalSelectionState}/>
          </AccordionItem>

          <AccordionItem title="Review">
            <Review profile={this.props.profile}
                    finalSelection={this.props.finalSelection}/>
          </AccordionItem>

        </Accordion>
      </div>
    )
  }
}

export default Form;