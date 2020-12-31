const userIdAction = (key) =>{
  console.log(key);
  return (dispatch) =>{
   return fetch('http://localhost:8000/home/getuserid/',{
    method:'POST',
    headers: {
    'Content-Type' : 'application/json',
    'Authorization':`Token ${key}`
    },
  })
  .then(response => response.json())
  .then((data)=> {console.log(data[0].user)
    if(data[0].user){
      dispatch({type:'GET_USERID',payload:{userId:data[0].user}})
    }
  });
  }
}

export default userIdAction;
