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
        <h1>Supplier form</h1>
        <div>
          <p>Please fill in the below...</p>
        </div>{' '}
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
