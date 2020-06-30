import React, { Component } from 'react'
import ProductItem from './ProductItem'
class Products extends Component {
    render() {
        return (
          <div className="row my-row pr-4 pl-2">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          </div>
        )
    }
}

export default Products
