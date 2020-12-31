const orderAction = (userId, key) => {
  console.log(userId)
  console.log(key)
  return (dispatch) => {
    return fetch(`http://localhost:8000/home/order/${userId}/`,{
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
     dispatch({type:'GET_ORDERS',payload:{orders:data}})
    }
  } catch(e){
  console.log("no orders")
  }
 })
  }
}

export default orderAction;
   //
