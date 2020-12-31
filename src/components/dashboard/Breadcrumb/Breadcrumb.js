import React from 'react'
import {connect} from 'react-redux'
import getLocationAction from '../../../actions/getLocationAction'
import './Breadcrumb.css'
function Breadcrumb(props) {

  const location_arr = props.currentLocation.split("/")

  const active_list_item = (loc) => {
    return <li class="breadcrumb-item active" aria-current="page">{loc}</li>
  }

  const inactive_list_item = (loc) => {
    return <li class="breadcrumb-item "><a className="cst-active" href="#">{loc}</a></li>
  }

  let my_arr = location_arr.filter(arr => arr !== "" )
  console.log(my_arr[my_arr.length-1])
  let rows = [];
  for(let i = 0; i < my_arr.length-1;i++){
  rows.push(inactive_list_item(my_arr[i]))
  }
  rows.push(active_list_item(my_arr[my_arr.length-1]))
  console.log(rows)
  return (
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
      <li class="breadcrumb-item "><a className="cst-active"href="/home">Home</a></li>
      {rows}
      </ol>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    currentLocation : state.locationReducer.location
  }
}
export default connect(mapStateToProps)(Breadcrumb)


// <li class="breadcrumb-item active" aria-current="page">Library</li>
