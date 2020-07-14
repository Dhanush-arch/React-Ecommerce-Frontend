import React from 'react'
import {connect} from 'react-redux'
import defaultProductAction from '../../../actions/defaultProductAction';

function Searchbar(props) {

  function searchProduct(e) {
    e.preventDefault()
    const searchword = document.getElementById('searchBar').value
    props.searchAction(searchword)
  }
  const style = {
    "border" : "#0AABF4 solid 1px"
  }

    return (
        <form className="form-inline my-2 my-lg-0 ml-3 pt-3 pb-2">
          <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
          <input className="form-control mr-sm-2 ml-2" type="search" id="searchBar" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-info my-2 my-sm-0" id="search-btn" type="button" style={style}onClick={searchProduct}>Search</button>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchAction : (searchword) => {dispatch(defaultProductAction(1, 1, 3,searchword))}
  }
}
export default connect(null, mapDispatchToProps)(Searchbar)
