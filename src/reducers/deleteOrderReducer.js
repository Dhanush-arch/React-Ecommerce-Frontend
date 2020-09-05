const initialstate = {
  response_msg : null,
}

const deleteOrderReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'ORDER_DELETED':
      return action.payload
    default:
      return state
  }
}
 export default deleteOrderReducer;
