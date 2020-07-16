const orderAction = (userId) => {
  return (dispatch) => {
    return fetch(`http://localhost:8000/home/order/${userId}/`,{
     method:'GET',
     headers: {
     'Content-Type': 'application/json'
   },
 })
 .then(response => response.json())
 .then(data => console.log(data))
  }
}

export default orderAction;
