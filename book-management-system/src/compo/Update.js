import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const params=useParams()
  const[state,setState]=useState({name:'',books:'',filebook:''})

  useEffect(()=>{
    fetch('http://localhost:5000/getdetails/'+ params.id)
    .then((response)=> response.json())
    .then((json)=>{
        setState(json)
    })
    .catch((err)=> console.log(err))
},[])


  const handler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const filehandler=(e)=>{
    setState({...state,filebook:e.target.files[0]})
  }
  const uploaddata=()=>{
    const{name,books,filebook}=state
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('books',books)
    formdata.append('filebook',filebook)

    fetch('http://localhost:5000/update/'+params.id, {
        method: 'PUT',
        body: formdata
      })
    .then((response) => response.json())
    .then((json) =>{
        alert(json.message)
        setState({name:'',books:'',filebook:''})
    })
    .catch((err) => console.log(err));
    
    


   
  }
  return (
    <>
    <div className='container'>
    <form>

    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" name='name' value={state.name} onChange={handler}/>
  </div>


  <div class="form-floating">
  <textarea class="form-control" placeholder="Update your book  !!!!" id="floatingTextarea2" style={{height: '100px'}} name='books' value={state.books} onChange={handler}></textarea>
  <label for="floatingTextarea2">Write About your book.. or Upload it  !!!!</label>
</div>
  
  <div><br/>
  <label for="exampleInputfile" class="form-label">Upload your book: </label>
    <input type="file" name='filebook' value={state.filebook} onChange={filehandler}/>
  </div><br/>

  
  <button type="submit" class="btn btn-primary" onClick={uploaddata}>Update</button>
</form>
    </div>
    </>
  )
}

export default Update
