const initialstate = {
  orders : null,
}

const orderReducer = (state=initialstate, action) => {
  switch(action.type){
    case 'GET_ORDERS':
      return action.payload
    default:
      return state
  }
}

export default orderReducer
