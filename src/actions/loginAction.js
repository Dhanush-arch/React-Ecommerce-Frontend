const loginAction = (email, password) =>{
  console.log(email)
  console.log(password)
  const obj = {
    email,
    password
  }
  return (dispatch) =>{
   return fetch('http://localhost:8000/rest-auth/login/',{
    method:'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(obj)
  })
  .then(response => response.json())
  .then((data)=> {
    if(data.key){
      dispatch({type:'LOGIN',payload:{key:data.key,islogedin:true}})
    }
    else{
      dispatch({type:'LOGIN',payload:{key:'',islogedin:false}})
    }
  });
  }
}

export default loginAction;
// {type:'LOGIN',payload:{key:23224535,islogedin:true}}
// dispatch({type:'LOGIN',payload:{key:data.key,islogedin:true}})

//   // 'username':"dhanush",
  // 'email':"dhanushm238@gmail.com",
  // 'password':"dhanush1893877",
