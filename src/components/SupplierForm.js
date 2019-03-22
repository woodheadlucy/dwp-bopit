import React, { Component } from 'react';
import './SupplierForm.css';

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
        </form>
      </div>
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
