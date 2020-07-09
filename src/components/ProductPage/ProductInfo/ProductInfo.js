import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductInfo extends Component {
    render() {
      console.log(this.props.product_details)
        return (
            <div className="col-6">
              <div className="row pr-md-5 pr-sm-4 mx-2">
                <h4>{this.props.product_details.productName}</h4>
              </div>
              <div className="row pr-md-5 pr-sm-4 mx-2">
                <p>{this.props.product_details.productDescription}</p>
              </div>
              <div className="row card-footer mx-2 pr-md-5">
                <div className="col-md-4 col-sm-4 pt-md-1">
                  <h5>${this.props.product_details.discountPrice}</h5>
                </div>
                <button className="btn btn-outline-info">Buy</button>
                <button className="btn btn-outline-info ml-2">Add to Cart</button>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    product_details : state.specificProductReducer.product_detail
  }
}

export default connect(mapStateToProps)(ProductInfo)
