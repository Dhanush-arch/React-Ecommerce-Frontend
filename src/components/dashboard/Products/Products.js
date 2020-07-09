import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import defaultProductAction from '../../../actions/defaultProductAction'
import ProductItem from './ProductItem'

function Products(props){
    useEffect(()=>{
      props.getProducts()
    },[])
    // props.getProducts()
    const product_row = [];
    for(let i=0;i<props.product_length;i++){

      product_row.push(<ProductItem {...props.home_products[i]}/>)
    }
    return (
          <div className="row my-row pr-4 pl-2">
            {product_row}
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
    getProducts : () => {dispatch(defaultProductAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
