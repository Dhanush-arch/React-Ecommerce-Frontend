const initialstate = {
  product_detail:{}
}

const specificProductReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'SET_SPECIFIC_PRODUCT':
      return action.payload
    default:
      return state
  }
}

export default specificProductReducer
