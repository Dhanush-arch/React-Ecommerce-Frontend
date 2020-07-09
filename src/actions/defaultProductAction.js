const defaultProductAction = () => {
  return (dispatch) =>{
   return fetch('http://localhost:8000/home/product',{
    method:'GET',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(response => response.json())
  .then(data=> {dispatch({type:'SET_DEFAULT_PRODUCT',payload:{products:data, pro_length:data.length}})});
  }
}

export default defaultProductAction;
