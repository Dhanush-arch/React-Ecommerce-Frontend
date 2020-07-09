import React, { Component } from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'

import ProductImage from './ProductImage/ProductImage'
import ProductInfo from './ProductInfo/ProductInfo'
import SimilarProducts from './SimilarProducts/SimilarProducts'

function ProductPage(props){
    const local_location = useLocation()
    let {id} = useParams()
    if(local_location.pathname){
      props.locationaction(local_location.pathname)
    }
        return (
            <div className="row">
              <ProductImage />
              <ProductInfo />
              <h5 className="col-12 text-center mt-4">Similar Products</h5>
              <SimilarProducts/>
            </div>
        )
    }

const mapStateToProps = (state) => {
  return {
    home_products : state.defaultProductReducer.products,
    product_length : state.defaultProductReducer.pro_length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    locationaction : (location) => {dispatch(getLocationAction(location))}
  }
}
export default connect(null, mapDispatchToProps)(ProductPage)
