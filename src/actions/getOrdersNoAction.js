const getOrdersNoAction = (id, key) => {
  return (dispatch) => {
    return fetch(`http://localhost:8000/home/order/${id}/`,{
     method:'GET',
     headers: {
     'Content-Type': 'application/json',
     Authorization :`Token ${key}`
   },
 })
 .then(response => response.json())
 .then(data => {
  try {
    if(data[0].id){
     dispatch({type:'GET_ORDERS_NO',payload:{orders_length:data.length}})
    }
  } catch(e){
  dispatch({type:'GET_ORDERS_NO',payload:{orders_length:null}})
  }
 })
  }
}
export default getOrdersNoAction;
