import React, { Component } from 'react'
import ProductItem from './ProductItem'
class Products extends Component {
    render() {
        return (
          <div className="row my-row">
          <div className="col-md-3">
            <ProductItem />
            </div>
          <div className="col-md-3">
            <ProductItem />
          </div>
          <div className="col-md-3">
            <ProductItem />
          </div>
          <div className="col-md-3">
            <ProductItem />
          </div>
          <div className="col-md-3">
            <ProductItem />
          </div>
          </div>
        )
    }
}

export default Products
