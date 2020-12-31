import React from 'react'
import Img1 from '../../../assets/img3.jpg'
import {Link} from 'react-router-dom';
import './products.css'
function ProductItem(props) {
  console.log(props)
    return (
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 pb-4">
        <Link className="my-card"to={`/Product/${props.productID}`}>
         <div class="card ">
           <img src={Img1} class="card-img-top" alt="..."/>
           <div class="card-body ">
             <h5 class="card-title">{props.productName}</h5>
             <p class="card-text">{props.productDescription}</p>
           </div>
           <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
         </div>
         </Link>
       </div>
    )
}

export default ProductItem
