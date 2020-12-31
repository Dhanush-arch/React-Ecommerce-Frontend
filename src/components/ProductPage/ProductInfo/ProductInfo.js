import React, { Component } from 'react'
import {connect} from 'react-redux'
import addOrderAction from '../../../actions/addOrderAction'
import similarProductsAction from '../../../actions/similarProductsAction'
class ProductInfo extends Component {

  handleAddToCart = (e) => {
    console.log("in info page")
    if(this.props.userid ){
      this.props.addToCart(this.props.product_details.discountPrice, this.props.userid, this.props.product_details.productID,1, 'dispatched', this.props.keys)
    }
  }
    render() {
      console.log(this.props.product_details)
      if(this.props.product_details.productCategory){
        console.log("in info");
        this.props.getSimilarProducts(this.props.product_details.productCategory)
      }
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
                <button className="btn btn-outline-info ml-2" onClick={this.handleAddToCart}>Add to Cart</button>
              </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    product_details : state.specificProductReducer.product_detail,
    userid : state.userIdReducer.userId,
    keys : state.loginReducer.key,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (productPrice, userID, productID, quantity, status, userkey) => {dispatch(addOrderAction(productPrice, userID, productID, quantity, status, userkey))},
    getSimilarProducts : (search) => {dispatch(similarProductsAction(search))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
