import React, { Component } from 'react';
// import logo from './tu-logo.png';
// import './App.css';
// import Input from './Input';

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  
  if (element.name) data[element.name] = element.value;
  return data;

}, {});
const SignupRoute = 'https://6bh6fxtt1b.execute-api.us-west-2.amazonaws.com/dev/signup';

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      completed: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({submitting: true})
    const formdata = formToJSON(e.target.elements);

    fetch(`${SignupRoute}`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    })
    .then(() => this.setState({completed: true}))
    .catch(console.warn);
  }

  render() {
    return (
      <div className="App">
        <iframe className="embedded-form"
                title="embedded-form"
                frameborder="0" src="https://app.smartsheet.com/b/form/de2b110ff77146cc93e866aa912f53d5"></iframe>
        {/* <div className='welcome__container'>
          <div className='welcome__title-container'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='welcome__title'>
              Welcome to TradeUp
            </h1>
          </div>
          <p className='welcome__text'>
            So glad you decided to join us! This page is only temporary for early adopters like you.
            Please provide us with the following information, and we'll let you know when we're up and running.
          </p>
        </div>
        {this.state.completed ? (
        <div className='success-message__wrapper'>
          <h2 className='success-message__title'>success!</h2>
          <p className='success-message'>
            Your information has been received. Thanks again for joining us, we'll get back
            in touch as soon as we have more info to share with you!
          </p>
        </div>
        ) : (
        <form className='signup-form form-animate' onSubmit={this.handleSubmit}>
          <div className='signup-form__row'>
            <Input label="First Name" name="firstName" />
            <Input label="Last Name" name="lastName" />
          </div>
          <Input label="Email" name="email" />
          <Input label="Certifications" name="credentials" multiLine />
          <button className='signup-form__button' type='submit' disabled={this.state.submitting}>SUBMIT</button>
        </form>
        )} */}
      </div>
      
    );
  }
}

export default FormSignUp;
