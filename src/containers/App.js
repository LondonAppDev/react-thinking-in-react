import React, { Component } from 'react';

import FilterProductTable from '../components/FilterProductTable';
import PRODUCTS from '../data/products';

import './App.css';


class App extends Component {
  render() {
    return (
      <FilterProductTable products={PRODUCTS} />
    );
  }
}

export default App;
