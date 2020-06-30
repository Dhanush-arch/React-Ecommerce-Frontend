import React from 'react'
import Img1 from '../../../assets/img3.jpg'

import './products.css'
function ProductItem() {
    return (
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 pb-4">
         <div class="card">
           <img src={Img1} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
           <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
         </div>
       </div>
    )
}

export default ProductItem
