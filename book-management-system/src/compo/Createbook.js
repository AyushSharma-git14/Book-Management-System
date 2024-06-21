import React, { useState } from 'react'

function Createbook() {
  const[book,setBook]=useState({name:'',books:'',filebook:''})
  const[nameMessage,setNameMessage]=useState('')
  const[bookmessage,setBookmessage]=useState('')
  const handler=(e)=>{
    setBook({...book,[e.target.name]:e.target.value})
  }
  const filehandler=(e)=>{
    setBook({...book,filebook:e.target.files[0]})
  }
  const uploaddata=()=>{
    const{name,books,filebook}=book
    const formdata=new FormData()
    formdata.append('name',name)
    formdata.append('books',books)
    formdata.append('filebook',filebook)



    if(name===''){
      setNameMessage('* Please fill this field')
    }
    else{
      setNameMessage('')
      fetch('http://localhost:5000/createbook', {
        method: 'POST',
        body: formdata
      })
        .then((response) => response.json())
        .then((json) =>{
         alert(json.message)
         setBook({name:"",books:'',filebook:''})
    })
    .catch((err) => console.log(err));
    }
    


    if(books===''){
      setBookmessage('* Please fill this field')
    }
    else{
      setBookmessage('')
    }
  }
  return (
    <>
    <div className='container'>
    <form>
      <div className='text-danger'>
        {nameMessage}
      </div>
    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" name='name' value={book.name} onChange={handler}/>
  </div>

  <div className='text-danger'>
        {bookmessage}
      </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Write About your book.. or Upload it  !!!!" id="floatingTextarea2" style={{height: '100px'}} name='books' value={book.books} onChange={handler}></textarea>
  <label for="floatingTextarea2">Write About your book.. or Upload it  !!!!</label>
</div>
  
  <div><br/>
  <label for="exampleInputfile" class="form-label">Upload your book: </label>
    <input type="file" name='filebook' value={book.filebook} onChange={filehandler}/>
  </div><br/>

  
  <button type="submit" class="btn btn-primary" onClick={uploaddata}>Upload</button>
</form>
    </div>
    
    </>
  )
}

export default Createbook
