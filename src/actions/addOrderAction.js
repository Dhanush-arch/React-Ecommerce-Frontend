const addOrderAction = (totalPrice, orderedUserID, orderedProductID, quantity, statusOfProduct, key) => {
  let obj = {
    totalPrice,
    orderedUserID,
    orderedProductID,
    quantity,
    statusOfProduct,
  }
  console.log(obj)
  return (dispatch) => {
    return fetch(`http://localhost:8000/home/checkorder/`,{
     method:'POST',
     headers: {
     'Content-Type': 'application/json',
     Authorization :`Token ${key}`
   },
     body:JSON.stringify(obj)
 })
 .then(response => response.json())
 .then(data => {
   if(data){
     console.log(data)
     const updated_quantiy = data[0].quantity + 1
     obj = {
       totalPrice,
       orderedUserID,
       orderedProductID,
       quantity : updated_quantiy,
       statusOfProduct,
     }
     return fetch(`http://localhost:8000/home/order/${orderedUserID}/`,{
       method:'PUT',
       headers: {
        'Content-Type': 'application/json',
        Authorization :`Token ${key}`
      },
       body:JSON.stringify(obj)
     }).then(response => response.json())
       .then(response => console.log(response))
   } else {
      return fetch(`http://localhost:8000/home/order/${orderedUserID}/`,{
        method:'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization :`Token ${key}`
        },
        body:JSON.stringify(obj)
        }).then(response => response.json())
        .then(response => console.log(response))
      }
    })
  }
}

export default addOrderAction;
