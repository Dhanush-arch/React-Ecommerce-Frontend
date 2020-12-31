const initialstate = {
  total_page : null,
  current_page: 0,
  has_next_page : null,
  has_prev_page : null,
  products : [],
  pro_length : 0,
  start_page:null,
  end_page :null,
  search_word:'',
}


const defaultProductReducer = (state=initialstate, action) => {
  switch (action.type) {
    case 'SET_DEFAULT_PRODUCT':
      return action.payload
    case 'SEARCH_PRODUCT':
      return action.payload
    default:
      return state
  }
}

export default defaultProductReducer
