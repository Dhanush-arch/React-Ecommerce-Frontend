const initialstate = {
  order:null,
}
const addOrderReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return action.payload;
    default:
      return state
  }
}

export default addOrderReducer;
