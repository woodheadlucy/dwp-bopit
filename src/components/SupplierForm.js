import React, { Component } from 'react';
import './Form.css';
const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxc6a1266851ec453ebf7cde03f685924a.mailgun.org';
const mg = mailgun({
  apiKey: '4f6eeb8073507312f46f759ff135a21d-985b58f4-664a2441',
  domain: DOMAIN,
});
const data = {
  from:
    'Mailgun Sandbox <postmaster@sandboxc6a1266851ec453ebf7cde03f685924a.mailgun.org>',
  to: 'zubair.lutfullah@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};

class SupplierForm extends Component {
  state = {
    companyName: '',
    contactName: '',
    donate: '',
    quantity: '',
  };
  render() {
    return (
      <div className="mainForm">
        <h1>Donate devices</h1>
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
          <label for="donate">I can donate:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="donate"
            value={this.state.donate}
          />
          <br />
          <label for="quantity">Quantity:</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="quantity"
            value={this.state.quantity}
          />
          <br />
          <button className="button">Send Notification</button>
        </form>{' '}
      </div>
    );
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.companyName + this.state.contactName);
    /* event.preventDefault(); */
    const { companyName, contactName, donate, quantity } = this.state;
    mg.messages().send('HELLO!!!!', function(error, body) {
      console.log(body, '<<<<<');
      alert(body);
    });
  };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { companyName, contactName, donate } = this.state;
  // };

  // handleSubmit = data => {
  //   mg.messages().send(data, function(error, body) {
  //     console.log(body, '<<<<<');
  //     alert(body);
  //   });
  // };
}

export default SupplierForm;
