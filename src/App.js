import React, { Component } from 'react';
import './App.css';
import SupplierForm from './components/SupplierForm';
import FacilitatorForm from './components/FacilitatorForm';
import Sidebar from './components/Sidebar';
import SignUpSupplier from './components/SignUpSupplier';
import SignUpFacilitator from './components/SignUpFacilitator';

class App extends Component {
  state = {
    supplierClick: false,
    facilitatorClick: false,
    signupFacilitatorClick: false,
    signupSupplierClick: false,
  };
  render() {
    return (
      <div className="App">
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
          <button className="button" onClick={this.handleSignUpFacilitator}>
            sign up to be a facilitator
          </button>
          {this.state.signupFacilitatorClick && <SignUpFacilitator />}
          <button className="button" onClick={this.handleFacilitator}>
            Request devices >
          </button>
          {this.state.facilitatorClick && <FacilitatorForm />}
          <p>
            <strong>Supplier:</strong>
          </p>
          <p>
            These are local organizations that have equipment that is suitable
            for donation. The IT department would sign up to be a supplier
            usually. This process is green and there is no charge for using
            bop-IT.
          </p>
          <button className="button" onClick={this.handleSignUpSupplier}>
            I'd like to register my company
          </button>
          {this.state.signupSupplierClick && <SignUpSupplier />}
          <button className="button" onClick={this.handleSupplier}>
            Donate devices >
          </button>
          {this.state.supplierClick && <SupplierForm />}
        </div>
        <div className="sidebar">
          <p>SIDEBAR</p>
        </div>{' '}
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

  handleSignUpSupplier = () => {
    const { signupSupplierClick } = this.state;
    this.setState({ signupSupplierClick: !signupSupplierClick });
  };

  handleSignUpFacilitator = () => {
    const { signupFacilitatorClick } = this.state;
    this.setState({ signupFacilitatorClick: !signupFacilitatorClick });
  };
}

export default App;
