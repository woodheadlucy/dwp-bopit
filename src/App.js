import React, { Component } from 'react';
import './App.css';
import SupplierForm from './components/SupplierForm';
import FacilitatorForm from './components/FacilitatorForm';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    supplierClick: false,
    facilitatorClick: false,
  };
  render() {
    return (
      <div>
        <h1 className="topBanner">GOV.UK</h1>
        <div className="main">
          <h1>Welcome to bop-IT</h1>
          <p>
            bop-IT helps local organizations donate surplus/slightly old but
            functioning IT equipment like laptops/phones/tablets/desktops to
            households in the UK that would benefit from them.
          </p>
          <p>There are two roles:</p>
          <p>
            <strong>Facilitator:</strong>
          </p>
          <p>
            The household in need isn't really online. So we work with
            facilitators who are in direct contact with people in need. e.g DWP
            Work Coaches, Teachers, Social Care workers etc.
          </p>

          <p>
            <strong>Supplier:</strong>
          </p>
          <p>
            These are local organizations that have equipment that is suitable
            for donation. The IT department would sign up to be a supplier
            usually. This process is green and there is no charge for using
            bop-IT.
          </p>
        </div>
        <button className="button" onClick={this.handleSupplier}>
          I'm a supplier >
        </button>
        {this.state.supplierClick && <SupplierForm />}
        <button className="button" onClick={this.handleFacilitator}>
          I'm a facilitator >
        </button>
        {this.state.facilitatorClick && <FacilitatorForm />}
      </div>
    );
  }

  handleSupplier = () => {
    const { supplierClick } = this.state;
    this.setState({ supplierClick: !supplierClick });
  };

  handleFacilitator = () => {
    const { facilitatorClick } = this.state;
    this.setState({ facilitatorClick: !facilitatorClick });
  };
}

export default App;
