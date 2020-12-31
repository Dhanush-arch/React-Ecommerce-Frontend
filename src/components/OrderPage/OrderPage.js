import React, { Component } from 'react'
import OrderHeader from './OrderHeader'
import OrderItem from './OrderItem'
import Breadcrumb from '../dashboard/Breadcrumb/Breadcrumb'

import './OrderPage.css'
class OrderPage extends Component {
    render() {
        return (
          <div className="px-2">
          <OrderHeader/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          </div>
        )
    }
}

export default OrderPage
