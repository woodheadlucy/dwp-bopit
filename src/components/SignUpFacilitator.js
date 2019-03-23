import React, { Component } from 'react';
import './Form.css';

class SignUpFacilitator extends Component {
  state = {
    companyName: '',
    contactName: '',
  };
  render() {
    return (
      <div className="mainForm">
        <h1>Facilitator sign up</h1>
        <div>
          <p>Please fill in the below...</p>
        </div>{' '}
        <form className="facilForm" onSubmit={this.handleSubmit}>
          <label for="contactName" class="standardlayout">
            Contact name:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            name="contactName"
            value={this.state.contactName}
          />{' '}
          <br />
          <label for="need" class="standardlayout">
            I need:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="need"
            value={this.state.need}
          />
          <br />
          <label for="quantity" class="standardlayout">
            Quantity:
          </label>
          <input
            class="standardlayout"
            onChange={this.handleChange}
            type="text"
            name="quantity"
            value={this.state.quanitity}
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

export default SignUpFacilitator;
