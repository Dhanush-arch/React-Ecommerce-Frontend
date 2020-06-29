import React, { Component } from 'react'

class ProductInfo extends Component {
    render() {
        return (
            <div className="col-md-6">
              <div className="row pr-md-5 mx-2">
                <h4>Product Title</h4>
                <p>macOS is the operating system that powers everything you do on a Mac. macOS Catalina brings dedicated apps for music, TV and podcasts. Smart updates to the apps you use most. And Sidecar, which lets you use iPad as a second display. So you can take everything you do above and beyond.</p>
              </div>
              <div className="row card-footer mx-2 pr-md-5">
                <div className="col-md-4 pt-md-1">
                  <h5>$1200</h5>
                </div>
                <button className="btn btn-outline-info">Buy</button>
                <button className="btn btn-outline-info ml-2">Add to Cart</button>
              </div>
            </div>
        )
    }
}

export default ProductInfo
