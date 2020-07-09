import React, { useEffect } from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'
import specificProductAction from '../../actions/specificProductAction'

import ProductImage from './ProductImage/ProductImage'
import ProductInfo from './ProductInfo/ProductInfo'
import SimilarProducts from './SimilarProducts/SimilarProducts'

function ProductPage(props){
    const local_location = useLocation()
    let {id} = useParams()
    if(local_location.pathname){
      props.locationaction(local_location.pathname)
    }

    useEffect(()=>{
      props.get_product_details(id)
    }, [])

    return (
        <div className="row">
          <ProductImage />
          <ProductInfo />
          <h5 className="col-12 text-center mt-4">Similar Products</h5>
          <SimilarProducts/>
        </div>
    )
    }

const mapDispatchToProps = (dispatch) => {
  return {
    locationaction : (location) => {dispatch(getLocationAction(location))},
    get_product_details : (id) => {dispatch(specificProductAction(id))}
  }
}
export default connect(null, mapDispatchToProps)(ProductPage)
