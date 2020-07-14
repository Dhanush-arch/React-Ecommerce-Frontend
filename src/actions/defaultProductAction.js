const defaultProductAction = (page=1, startPage=1, endPage=3) => {
  console.log("in")
  console.log(page);
  console.log(startPage)
  console.log(endPage)
  console.log("out")
  return (dispatch) =>{
   return fetch(`http://localhost:8000/home/product/0/?page=${page}`,{
    method:'GET',
    headers: {
    'Content-Type': 'application/json'
  },
  })
  .then(response => response.json())
  .then(data=> {dispatch({type:'SET_DEFAULT_PRODUCT',payload:{total_page:data.count,has_next_page:data.next?true:false, has_prev_page : data.previous?true:false ,products:data.results,current_page : page,start_page: startPage,end_page:data.count>=3?endPage:data.count, pro_length:data.results.length}})});
  }
}

export default defaultProductAction;
