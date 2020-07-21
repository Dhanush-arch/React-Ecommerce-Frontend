import React, { Component } from 'react'
// s.no Date Product-Name Price Status
import Img from '../../assets/img3.jpg'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function OrderItem(props) {
  let date = props.dateOfOrder;
  let date_arr = date.split('T')
  console.log(props);
        return (
          <div className="row">
            <div className="col-1">
              <p>{props.id}</p>
            </div>
            <div className="col-2">
              <p>{date_arr[0]}</p>
            </div>
            <div className="col-3" id={props.orderedProductID}>
            <Link className="my_order_div" to={`/Product/${props.orderedProductID}`}>
              <img className="w-50 "src={Img} alt=".."/>
              <p className="">{props.productName}</p>
            </Link>
            </div>
            <div className="col-2">
              <p>{props.quantity}</p>
            </div>
            <div className="col-2">
              <p>${props.totalPrice}</p>
            </div>
            <div className="col-2">
              <p>{props.statusOfProduct}</p>
            </div>
          </div>
        )
    }

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)
