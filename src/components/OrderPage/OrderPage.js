import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'
import orderAction from '../../actions/orderAction'
import OrderHeader from './OrderHeader'
import OrderItem from './OrderItem'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'
import getOrderedProductName from '../../actions/getOrderedProductName'
import './OrderPage.css'
function OrderPage(props) {
  const local_location = useLocation()
  if(local_location.pathname){
    props.locationaction(local_location.pathname)
  }

  useEffect(()=>{
    props.getorders(props.userID, props.keys)
  },[])
  let order_row = [];
  if(props.orderItems){
      if(props.productName === null){
        let id_row=[];
        for(let j=0;j<props.orderItems.length;j++){
            id_row.push(props.orderItems[j].orderedProductID)
        }
        props.getName(id_row)
      }
      
      if(props.productName !== null){
      if(props.orderItems.length !== props.productName.length){
        let id_row=[];
        for(let j=0;j<props.orderItems.length;j++){
            id_row.push(props.orderItems[j].orderedProductID)
        }
        props.getName(id_row)
      }
      for(let i=0;i< props.orderItems.length;i++){
        order_row.push(<OrderItem {...props.orderItems[i]} {...props.productName[i]}/>)
      }
    }
  }
  return (
    <div className="px-2">
    <OrderHeader/>
    {order_row}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    keys : state.loginReducer.key,
    userID : state.userIdReducer.userId,
    orderItems : state.orderReducer.orders,
    productName : state.orderedProductNames.ordersProductName
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    locationaction : (location) => {dispatch(getLocationAction(location))},
    getorders: (userid, key) => {dispatch(orderAction(userid, key))},
    getName : (list) => {dispatch(getOrderedProductName(list))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
