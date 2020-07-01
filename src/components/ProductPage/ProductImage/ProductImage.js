import React, { Component } from 'react'
import Img from '../../../assets/Img4.jpg'

class ProductImage extends Component {
    render() {
        return (
            <div className="col-6 pl-4">
              <img  className="w-100" src={Img} alt="Product" />
            </div>
        )
    }
}

export default ProductImage
