import React from 'react'

function OrderHeader() {
    return (
        <div className="row">
          <div className="col-1">
            <h5>S.No</h5>
          </div>
          <div className="col-2">
            <h5>Date</h5>
          </div>
          <div className="col-3">
            <h5>Product Name</h5>
          </div>
          <div className="col-2">
            <h5>Quantity</h5>
          </div>
          <div className="col-2">
            <h5>Price</h5>
          </div>
          <div className="col-2">
            <h5>Status</h5>
          </div>
        </div>
    )
}

export default OrderHeader
