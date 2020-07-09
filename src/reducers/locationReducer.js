const initialstate = {
  location:'/'
}

const locationReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload
    default:
      return state
  }
}

export default locationReducer
