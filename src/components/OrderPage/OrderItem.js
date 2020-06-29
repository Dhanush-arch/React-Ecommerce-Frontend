import React, { Component } from 'react'
// s.no Date Product-Name Price Status


class OrderItem extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>26.06.2020</p>
            </div>
            <div className="col-3">
              <p>Macbook Pro Retina 2017 Model</p>
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
