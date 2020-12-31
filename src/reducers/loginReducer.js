const initialstate = {
  key:434757,
  islogedin: false
}

const loginReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state
  }
}

export default loginReducer
