import React, { Component } from 'react';
import './SupplierForm.css';
import Mailchimp from 'react-mailchimp-form';

class SupplierForm extends Component {
  state = {
    companyName: '',
    contactName: '',
    donate: '',
    quantity: '',
  };
  render() {
    return (
      <div>
        <h1>Supplier form</h1>
        <div>
          <p>Please fill in the below...</p>
        </div>
        <Mailchimp
          action="https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX"
          fields={[
            {
              name: 'COMPANY_NAME',
              placeholder: 'Your company',
              type: 'text',
              required: true,
            },
            {
              name: 'CONTACT_NAME',
              placeholder: 'Your name',
              type: 'text',
              required: true,
            },
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true,
            },
            {
              name: 'ITEMS_DONATE',
              placeholder: 'What can you donate?',
              type: 'text',
              required: true,
            },
            {
              name: 'QUANTITY',
              placeholder: 'How many do you have?',
              type: 'number',
              required: true,
            },
          ]}
        />
      </div>
      /* <form className="suppForm" onSubmit={this.handleSubmit}>
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
          <button>Submit</button>
        </form> */
    );
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { companyName, contactName, donate } = this.state;
  };
}

export default SupplierForm;
