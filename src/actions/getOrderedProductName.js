const getOrderedProductName = (getlist) => {
 let word = '';
 let list = [];
  for(let i=0;i<getlist.length;i++){
   
   if(i+1 === getlist.length){
     word += "fororder="+getlist[i]
   } else{
   word += "fororder="+getlist[i]+"&";
   }
  }
  console.log(word)
  return (dispatch) =>{
   return fetch(`http://localhost:8000/home/product/0/?${word}`,{
    method:'GET',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(response => response.json())
  .then(data=> {
  dispatch({type:'SET_PRODUCTNAMES',payload:{ordersProductName:data}})
  });
  }
}
 export default getOrderedProductName;
