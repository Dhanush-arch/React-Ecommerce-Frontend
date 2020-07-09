import React, { Component } from 'react'
import {connect} from 'react-redux'
import getLocationAction from '../../actions/getLocationAction'
import {useLocation} from 'react-router-dom'
import Searchbar from '../dashboard/Searchbar/Searchbar'
import Products from '../dashboard/Products/Products'

function Home(props){
  const local_location = useLocation()
  if(local_location.pathname){
    props.locationaction(local_location.pathname)
  }
  return (
        <Products />
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    locationaction : (location) =>{dispatch(getLocationAction(location))}
  }
}
export default connect(null, mapDispatchToProps)(Home)
