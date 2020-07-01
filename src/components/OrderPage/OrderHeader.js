import React from 'react'

function OrderHeader() {
    return (
      <div className="row">
        <div className="col-1">
          <h6>SI.No</h6>
        </div>
        <div className="col-2">
          <h6>Date</h6>
        </div>
        <div className="col-3">
          <h6>Product</h6>
        </div>
        <div className="col-2">
          <h6>Quantity</h6>
        </div>
        <div className="col-2">
          <h6>Price</h6>
        </div>
        <div className="col-2">
          <h6>Status</h6>
        </div>
      </div>
    )
}

export default OrderHeader
