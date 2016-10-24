import React from 'react/addons';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable'
import PRODUCTS from './PRODUCTS'

React.render(<FilterableProductTable products={PRODUCTS} />, document.body);