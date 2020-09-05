import React, { useEffect } from 'react'
// s.no Date Product-Name Price Status
import Img from '../../assets/img3.jpg'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import deleteOrderAction from '../../actions/deleteOrderAction'
import orderAction from '../../actions/orderAction'
import './OrderItem.css'
function OrderItem(props) {
  let date = props.dateOfOrder;
  let date_arr = date.split('T')
  
  function handleDelete(){
    props.deleteOrder(props.userid, props.keys, props.orderedProductID)
  }
  console.log(props);
        return (
          <div className="row">
            <div className="col-1">
              <p>{props.id}</p>
            </div>
            <div className="col-2">
              <p>{date_arr[0]}</p>
            </div>
            <div className="col-2" id={props.orderedProductID}>
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
            <div className="col-1">
              <i class="fa fa-lg fa-trash trash-icon" aria-hidden="true" onClick={handleDelete}></i>
            </div>
          </div>
        )
    }

const mapStateToProps = (state) => {
  return {
    keys : state.loginReducer.key,
    msg : state.deleteOrderReducer.response_msg,
    userid : state.userIdReducer.userId,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder : (orderedUserID, key, orderedProductID) => {dispatch(deleteOrderAction(orderedUserID, key, orderedProductID))},
    getorders : (userId, key) => {dispatch(orderAction(userId, key))},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderItem)
