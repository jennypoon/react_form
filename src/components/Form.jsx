import React, { Component } from 'react';
import Profile from './Profile.jsx';
import Selection from './Selection.jsx';
import Review from './Review.jsx';
// import { Accordion, AccordionItem } from 'react-light-accordion';
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
    const { activeSection } = this.props
    console.log("FORM - ACTION SECTION", activeSection)
    const activeClass = "accordion-item active";

    return (
      <div>

        <div>
          <DraftQuote formState={this.state}/>
        </div>

        <div className="form_container">
          <div className="accordion">
            {(activeSection === 1) ?
            (<div className="accordion-item active">
              <button className="title"> Profile </button>
              <div className="panel">
                <Profile profileState={this.props.profileState}/>
              </div>
            </div>) :
            (<div className="accordion-item">
              <button className="title"> Profile </button>
              <div className="panel">
                <Profile profileState={this.props.profileState}/>
              </div>
            </div>)}

            {(activeSection === 2) ?
            (<div className="accordion-item active">
              <button className="title"> Order </button>
              <div className="panel">
               <Selection quoteState={this.quoteStates}
                           finalSelectionState={this.props.finalSelectionState}/>
              </div>
            </div>) :
            (<div className="accordion-item">
              <button className="title"> Order </button>
              <div className="panel">
                <Selection quoteState={this.quoteStates}
                           finalSelectionState={this.props.finalSelectionState}/>
              </div>
            </div>)}

         {(activeSection === 3) ?
            (<div className="accordion-item active">
              <button className="title"> Review </button>
              <div className="panel">
               <Review profile={this.props.profile}
                      finalSelection={this.props.finalSelection}/>
              </div>
            </div>) :
            (<div className="accordion-item">
              <button className="title"> Review </button>
              <div className="panel">
                <Review profile={this.props.profile}
                      finalSelection={this.props.finalSelection}/>
              </div>
            </div>)}

       </div>
      </div>
    </div>
    )
  }
}

export default Form;