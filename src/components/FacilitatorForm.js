import React, { Component } from 'react';
import './FacilitatorForm.css';
import Mailchimp from 'react-mailchimp-form';

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

        {/* <Mailchimp
          action="https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX"
          fields={[
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
              name: 'ITEMS_NEEDED',
              placeholder: 'What do you need?',
              type: 'text',
              required: true,
            },
            {
              name: 'QUANTITY',
              placeholder: 'How many do you need?',
              type: 'number',
              required: true,
            },
          ]}
        /> */}
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
    const { contactName, need } = this.state;
  };
}

export default FacilitatorForm;
