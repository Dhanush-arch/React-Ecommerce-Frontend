import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import defaultProductAction from '../../../actions/defaultProductAction'
import './PaginationNav.css'
function PaginationNav(props) {

  useEffect(()=>{
    if(props.endPage === props.total_pages && props.endPage != null){
      document.getElementById('next').classList.add('disabled')
    }else {
        try{
          document.getElementById('next').classList.remove('disabled')
        } catch(err){
          console.log("can't remove")
        }
    }

    if(props.startPage === 1){
      document.getElementById("prev").classList.add('disabled')
    }else {
      try{
        document.getElementById('prev').classList.remove('disabled')
      } catch(err){
        console.log("can't remove");
      }
    }
  })


  function isclicked(e){
    props.productPage(e.currentTarget.id, props.startPage, props.endPage, props.search)
  }






  function handleNext() {
    if(props.endPage < props.total_pages){
      if(props.total_pages-props.endPage <= 3){
        console.log("1if")
        props.productPage(props.endPage,props.endPage, props.total_pages, props.search)
      }else{
        console.log("2if")
        props.productPage(props.startPage+3, props.startPage+3,props.endPage+3,props.search)
      }
    }
  }

  function handlePrev() {
    if(props.startPage > 1){
      if(props.startPage%3 == 0 ){
      props.productPage(props.startPage-2,props.startPage-2,props.startPage, props.search)
    }else {
      props.productPage(props.startPage-3,props.startPage-3,props.startPage-1, props.search)
    }
    }
}

  const pagination_row = [];
  for(let i=props.startPage;i<=props.endPage;i++){
    if(i == props.currentPage){
      pagination_row.push(<li className="page-item my-page-link my-active-link"  id={`${i}`}><a class="page-link my-page-item">{i}</a></li>)
    }else {
    pagination_row.push(<li className="page-item my-page-link" id={`${i}`}onClick={isclicked}><a class="page-link my-page-item" >{i}</a></li>)
  }
  }
  const prev = "<<";
  const next = '>>';

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          <li className="page-item my-active-link my-active-link-prev" onClick={handlePrev} id="prev">
            <a className="page-link " >{prev}</a>
          </li>
            {pagination_row}
          <li className="page-item my-active-link" onClick={handleNext} id="next">
            <a className="page-link" >{next}</a>
          </li>
        </ul>
      </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    total_pages : state.defaultProductReducer.total_page,
    hasNextPage : state.defaultProductReducer.has_next_page,
    hasPrevPage : state.defaultProductReducer.has_prev_page,
    currentPage : state.defaultProductReducer.current_page,
    // pageDisplaySize : state.defaultProductReducer.page_display,
    startPage : state.defaultProductReducer.start_page,
    endPage : state.defaultProductReducer.end_page,
    search : state.defaultProductReducer.search_word,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productPage  : (page, startpage, endpage, searchproduct) => {dispatch(defaultProductAction(page, startpage, endpage, searchproduct))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaginationNav)

// disabled
