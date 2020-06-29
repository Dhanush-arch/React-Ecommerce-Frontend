import React, { Component } from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductInfo from './ProductInfo/ProductInfo'
import SimilarProducts from './SimilarProducts/SimilarProducts'
class ProductPage extends Component {
    render() {
        return (

            <div className="row">
              <ProductImage />
              <ProductInfo />
              <h5 className="col-12 footer mt-4">Similar Products</h5>
              <SimilarProducts/>
            </div>

        )
    }
}

export default ProductPage
