const initialstate = {
  order : null,
}




const orderReducer = (state=initialstate, action) => {
  switch(action.type){
    case 'GET_ORDERS':
      return action.payload
    default:
      return state
  }
}
