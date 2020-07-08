import React, { Component } from 'react'
import ProductItem from './ProductItem'

function Products(){
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

export default Products
