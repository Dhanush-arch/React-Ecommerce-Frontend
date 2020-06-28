import React from 'react'
import Img1 from '../../../assets/Img4.jpg'
import Img2 from '../../../assets/img2.jpg'
import Img3 from '../../../assets/img3.jpg'
function Carousel() {
    return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade w-50" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Img2}  className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Img3}  className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
</div>
    )
}

export default Carousel
