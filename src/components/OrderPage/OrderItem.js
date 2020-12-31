import React, { Component } from 'react'
// s.no Date Product-Name Price Status
import Img from '../../assets/img3.jpg'

class OrderItem extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>27/01/2020</p>
            </div>
            <div className="col-3">
              <img className="w-50"src={Img} alt=".."/>
              <p>Macbook pro</p>
            </div>
            <div className="col-2">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>$1200</p>
            </div>
            <div className="col-2">
              <p>Dispatched</p>
            </div>
          </div>
        )
    }
}

export default OrderItem
