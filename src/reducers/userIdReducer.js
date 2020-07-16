const initialstate = {
  userId: null,
}

const userIdReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'GET_USERID':
      return action.payload
    default:
      return state
  }
}

export default userIdReducer
