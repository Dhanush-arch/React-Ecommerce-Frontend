import React from 'react'
import Img1 from '../../../assets/img3.jpg'
import Img2 from '../../../assets/img2.jpg'
import Img3 from '../../../assets/Img4.jpg'

function SimilarProduct() {
    return (
      <div class="container cst-text-center my-1 col-12">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">
                <div class="carousel-item row no-gutters active">
                    <div class="col-2 float-left"><img class="img-fluid" src={Img1} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img2} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img3} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img1} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img2} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img3} alt="Similar Product"/></div>
                </div>
                <div class="carousel-item row no-gutters">
                    <div class="col-2 float-left"><img class="img-fluid" src={Img1} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img2} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img3} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img1} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img2} alt="Similar Product"/></div>
                    <div class="col-2 float-left"><img class="img-fluid" src={Img3} alt="Similar Product"/></div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
    )
}

export default SimilarProduct
