import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'
import orderAction from '../../actions/orderAction'
import OrderHeader from './OrderHeader'
import OrderItem from './OrderItem'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'

import './OrderPage.css'
function OrderPage(props) {
  const local_location = useLocation()
  if(local_location.pathname){
    props.locationaction(local_location.pathname)
  }

  useEffect(()=>{
    props.getorders(props.userID, props.keys)
  },[])
  let order_row = []
  if(props.orderItems){
      for(let i=0;i< props.orderItems.length;i++){
        order_row.push(<OrderItem {...props.orderItems[i]}/>)
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
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    locationaction : (location) => {dispatch(getLocationAction(location))},
    getorders: (userid, key) => {dispatch(orderAction(userid, key))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
