import React from 'react';
import './App.css';
import sampleAction from './actions/sampleaction'
import {connect} from 'react-redux'

class App extends React.Component {

  handleClick = (e) => {
    this.props.sampleaction()
  }
  render(){
    return(
      <div className='App'>
        <button onClick={this.handleClick}>
          text
        </button>
        <h1>{this.props.keys}</h1>
      </div>
  )
}
}

const mapStateTorProps = (state) =>{
  return {
    keys : state.key,
    islogedin : state.islogedin,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    sampleaction: () => {dispatch(sampleAction())}
  }
}
export default connect(mapStateTorProps,mapDispatchToProps)(App);
