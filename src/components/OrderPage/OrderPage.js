import React, { Component } from 'react'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'
import OrderHeader from './OrderHeader'
import OrderItem from './OrderItem'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'

import './OrderPage.css'
function OrderPage(props) {
  const local_location = useLocation()
  if(local_location.pathname){
    props.locationaction(local_location.pathname)
  }
  return (
    <div className="px-2">
    <OrderHeader/>
    <OrderItem/>
    <OrderItem/>
    <OrderItem/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    locationaction : (location) => {dispatch(getLocationAction(location))}
  }
}
export default connect(null, mapDispatchToProps)(OrderPage)
