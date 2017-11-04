import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterProductTable;
