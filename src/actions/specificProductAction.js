const specificProductAction = (id) => {
  return (dispatch) =>{
   return fetch(`http://localhost:8000/home/product/${id}/`,{
    method:'GET',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(response => response.json())
  .then(data=> {
  dispatch({type:'SET_SPECIFIC_PRODUCT',payload:{product_detail:data}});
   });
  }
}

export default specificProductAction;
