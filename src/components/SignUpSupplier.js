import React, { Component } from 'react';
import './Form.css';

class SignUpSupplier extends Component {
  state = {
    companyName: '',
    contactName: '',
  };
  render() {
    return (
      <div className="mainForm">
        <h1>Register your company</h1>
        <form className="suppForm" onSubmit={this.handleSubmit}>
          <label for="companyName">Company name:</label>
          <input
            onChange={this.handleChange}
            name="companyName"
            value={this.state.companyName}
          />
          <br />
          <label for="contactName">Contact name:</label>
          <input
            onChange={this.handleChange}
            name="contactName"
            value={this.state.contactName}
          />{' '}
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
          <button className="button">Register</button>
        </form>{' '}
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

  handleSubmit = data => {
    fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // Do whatever you would like, display a thank you message, or inform the user if they are already a member
      });
  };
}

export default SignUpSupplier;
