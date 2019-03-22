import React, { Component } from 'react';
import './App.css';
import SupplierForm from './components/SupplierForm';
import FacilitatorForm from './components/FacilitatorForm';

class App extends Component {
  state = {
    supplierClick: false,
    facilitatorClick: false,
  };
  render() {
    return (
      <div className="banner">
        <h1>bop IT</h1>
        <button onClick={this.handleSupplier}>I'm a supplier</button>
        {this.state.supplierClick && <SupplierForm />}
        <button onClick={this.handleFacilitator}>I'm a facilitator</button>
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
