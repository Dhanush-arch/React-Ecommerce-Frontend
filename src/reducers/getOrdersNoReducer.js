const initialstate = {
  orders_length : null,
}

const getOrdersNoReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'GET_ORDERS_NO':
      return action.payload
    default:
      return state
  }
}

export default getOrdersNoReducer;
