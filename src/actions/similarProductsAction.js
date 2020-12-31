const similarProductsAction = (searchWord) => {
  return (dispatch) =>{
   return fetch(`http://localhost:8000/home/getcategory/?search=${searchWord}`,{
    method:'GET',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(response => response.json())
  .then(data=> {dispatch({type:'GET_SIMILAR_PRODUCTS',payload:{similar_products:data}})});
   }
 }


export default similarProductsAction;
