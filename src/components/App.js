import React, { Component } from 'react';

import FilterableProductTable from '../containers/FilterableProductTable';
import PRODUCTS from '../data/products';

import './App.css';


class App extends Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    );
  }
}

export default App;
