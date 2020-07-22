import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import getOrdersNoAction from '../../actions/getOrdersNoAction'
import './Cartlogo.css'
function Cartlogo(props) {
  useEffect(()=>{
    if(props.userid && props.keys){
      props.getOrderslen(props.userid, props.keys)
  }
})
    let count = props.orders;
    if(count===null){
    count = 0;
    }
    return (
        <div className="cartlogo">
            <img className="my-cart cart-icon"src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png"/>
            <div className="circle"><p>{count}</p></div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    orders : state.getOrdersNoReducer.orders_length,
    keys : state.loginReducer.key,
    userid : state.userIdReducer.userId,
    orders_get : state.addOrderReducer.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderslen : (id, key) => {dispatch(getOrdersNoAction(id, key))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cartlogo)

//<img className="cart-icon" src={Cartlogopic} alt="userlogo"/><div className="circle"><p>1</p></div>
