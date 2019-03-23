import React, { Component } from 'react';
import './Form.css';

class SignUpFacilitator extends Component {
  state = {
    name: '',
    job: '',
    email: '',
    location: '',
  };
  render() {
    return (
      <div className="mainForm">
        <h1>Sign up as a facilitator</h1>
        <form
          className="facilForm"
          //   action="https://us20.api.mailchimp.com/post?u=XXXXXXX&amp;id=XXXXXX"
          onSubmit={this.handleSubmit}
        >
          <label for="contactName" class="standardlayout">
            Contact name:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.contactName}
          />{' '}
          <br />
          <label for="job" class="standardlayout">
            Job title:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="job"
            value={this.state.job}
          />
          <br />
          <label for="email" class="standardlayout">
            Email:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
          />
          <br />
          <label for="location" class="standardlayout">
            Location:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.location}
          />
          <br />
          <button className="button">Send Request</button>
        </form>
      </div>
    );
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { contactName, need } = this.state;
  // };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      name: '',
      job: '',
      email: '',
      location: '',
    });
    alert('You have successfully signed up!');
    // fetch('/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     // Do whatever you would like, display a thank you message, or inform the user if they are already a member
    //   });
  };
}

export default SignUpFacilitator;
