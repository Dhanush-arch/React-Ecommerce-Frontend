const loginAction = () =>{
  return (dispatch) =>{
   return fetch('http://localhost:8000/rest-auth/login/',{
    method:'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'username':"dhanush",
      'email':"dhanushm238@gmail.com",
      'password':"dhanush1893877",
    })
  })
  .then(response => response.json())
  .then(data => dispatch({type:'LOGIN',payload:{key:data.key,islogedin:true}}));
  }
}

export default loginAction;
// {type:'LOGIN',payload:{key:23224535,islogedin:true}}
