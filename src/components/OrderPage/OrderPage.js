import React, { Component } from 'react'
import OrderHeader from './OrderHeader'
import OrderItem from './OrderItem'
import './OrderPage.css'
class OrderPage extends Component {
    render() {
        return (
            <div className="row my-row-cst">
              <div className="col-md-12">
                <OrderHeader/>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
      
              </div>
            </div>
        )
    }
}

export default OrderPage
