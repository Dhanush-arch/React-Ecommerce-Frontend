import React from 'react'
import Img1 from '../../../assets/img3.jpg'
import Img2 from '../../../assets/img2.jpg'
import Img3 from '../../../assets/Img4.jpg'
import {connect} from 'react-redux'
import specificProductAction from '../../../actions/specificProductAction'
import './SimilarProduct.css'
function SimilarProduct(props) {
  function handleclick(e){
    console.log(e.target.id)
    props.specificproductcction(e.target.id)
  }
  if(props.similarproducts){
    let row_1 = [];
    let row_2 = [];
    for(let i=0;i<props.similarproducts.length;i++){
      console.log(props.similarproducts[i])
      if(i<4){
        row_1.push(<div class="col-3 float-left mx-1 mt-2 mb-4 my-fluid"><img class="img-fluid my-fluid" id={props.similarproducts[i].productID} src={Img1} alt="Similar Product" onClick={handleclick}/></div>)
      } else{
        row_2.push(<div class="col-3 float-left"><img class="img-fluid" id={props.similarproducts[i].productID} src={Img1} alt="Similar Product"/></div>)
      }
    }

  const prev_icon = [];
  prev_icon.push(<a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>)
  prev_icon.push(<a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
  </a>)
    return (
      <div class="container cst-text-center my-1 col-12">
        <div id="recipeCarousel" class="carousel slide  w-100">
            <div class="carousel-inner w-100" role="listbox">
                <div class="carousel-item row no-gutters active">
                    {row_1}
                </div>
                <div class="carousel-item row no-gutters">
                    {row_2}
                </div>
            </div>
            {props.similarproducts.length===8?prev_icon:<div></div>}
        </div>
      </div>
    )
} else{
    return(
    <div></div>
    )
}
}
const mapStateToProps = (state) => {
  return {
    similarproducts : state.similarProductsReducer.similar_products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    specificproductcction : (id) => {dispatch(specificProductAction(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SimilarProduct)

//data-ride="carousel"
