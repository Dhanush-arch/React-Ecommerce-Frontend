const initialstate = {
  similar_products : null,
}

const similarProductsReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'GET_SIMILAR_PRODUCTS':
      return action.payload
    default:
      return state
  }
}

export default similarProductsReducer;
