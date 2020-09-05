const deleteOrderAction = (orderedUserID, key, orderedProductID) => {
  const obj = {
    orderedUserID,
    orderedProductID
  }
  return (dispatch) => {
    return fetch(`http://localhost:8000/home/order/${orderedUserID}/`,{
     method:'DELETE',
     headers: {
     'Content-Type': 'application/json',
     Authorization :`Token ${key}`
   },
   body:JSON.stringify(obj)
 })
 .then(response => response.json())
 .then(data => {
   try {
     if(data[0].id){
      dispatch({type:'GET_ORDERS',payload:{orders:data}})
     }
   } catch(e){
   dispatch({type:'GET_ORDERS',payload:{orders:null}})
   }
  })
  }
}

export default deleteOrderAction;
