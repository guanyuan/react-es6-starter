import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable'
import PRODUCTS from './PRODUCTS'

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById("root"));