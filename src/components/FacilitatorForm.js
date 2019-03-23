import React, { Component } from 'react';
import './Form.css';

class FacilitatorForm extends Component {
  state = {
    contactName: '',
    need: '',
    quanitity: '',
    location: '',
  };
  render() {
    return (
      <div>
        <h1>Facilitator form</h1>
        <div>
          <p>Please fill in the below...</p>
        </div>

        <form
          className="facilForm"
          action="https://us20.api.mailchimp.com/post?u=XXXXXXX&amp;id=XXXXXX"
          onSubmit={this.handleSubmit}
        >
          <br />
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

  handleSubmit = event => {
    event.preventDefault();
    const { contactName, need } = this.state;
  };
}

export default FacilitatorForm;
