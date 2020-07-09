const initialstate = {
  products : [],
  pro_length : 0,
}


const defaultProductReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'SET_DEFAULT_PRODUCT':
      return action.payload
    default:
      return state
  }
}

export default defaultProductReducer
