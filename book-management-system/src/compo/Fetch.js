import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {
    const[data,setData]=useState([])

    //function of fetching
    const getdata=()=>{
        fetch('http://localhost:5000/fetch')
        .then((response)=> response.json())
        .then((json)=>{
            setData(json)
        })
        .catch((err)=> console.log(err))
    }

    //Fetching Data

    useEffect(()=>{
        getdata()
    },[])

    //Deleting Api call
    const deleted=async(id)=>{
        let d=await fetch('http://localhost:5000/delete/'+id, {
            method: 'DELETE',
          });
          if(d){
            getdata()
          }
    }

    //Updating Api call


  return (
    <>
<table class="table">
  <thead>
    <tr>
      <th scope="col">S.no.</th>
      <th scope="col">Name</th>
      <th scope="col">Book Update</th>
      
    </tr>
  </thead>
  <tbody>
  
    {
        data.map((v,i)=>  
    <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{v.name}</td>
      <td>
      <button className="btn btn-danger" onClick={()=>deleted(v._id)}>Delete</button>
      <Link to={`/update/${v._id}`}><button type="button" class="btn btn-success">Update</button></Link>
      </td>
      
    </tr>


    )
    }
    </tbody>
    </table>
    
    </>
  )
}

export default Fetch
