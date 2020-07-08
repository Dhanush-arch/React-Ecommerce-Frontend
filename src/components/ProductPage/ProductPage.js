import React, { Component } from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductInfo from './ProductInfo/ProductInfo'
import SimilarProducts from './SimilarProducts/SimilarProducts'

function ProductPage({match}){
  console.log(match.params.id)
        return (
            <div className="row">
              <ProductImage />
              <ProductInfo />
              <h5 className="col-12 text-center mt-4">Similar Products</h5>
              <SimilarProducts/>
            </div>
        )
    }


export default ProductPage
