import React from 'react'
import {connect} from 'react-redux'
import PaginationNav from '../PaginationNav/PaginationNav'
function Footer(props) {
    return (
        <div className="sticky-footer text-center">
        {props.current_location == '/'?<PaginationNav/>:<div></div>}
          <hr/>
          <h3>Amazon</h3>
          <p>Copyrights owned by www.html.com</p>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    current_location : state.locationReducer.location
  }
}
export default connect(mapStateToProps)(Footer)
