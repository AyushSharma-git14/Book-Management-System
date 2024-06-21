import React,{ useState } from 'react'


function Signup() {
  const[state,setState]=useState({name:'',email:'',password:'',conpass:'',number:''})
  const[nameMessage,setNameMessage]=useState("")
  const[emailMessage,setEmailMessage]=useState("")
  const[passMessage,setPassMessage]=useState("")
  const[numMessage,setNumMessage]=useState("")

  const handler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const submitdata=()=>{
    const{name,email,password,conpass,number}=state
    
    
    //Regex for Security
    const nameregex=/^[a-zA-Z]+$/
    const emailregex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const passregex=/^[a-zA-Z]\w{3,14}$/
    const numregex=/^[0-9]*$/


    //POST API

    if(password===conpass && (name.match(nameregex))){
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: JSON.stringify({name,email,password,conpass,number}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>{
         alert(json.message)
         setState({name:"",email:"",password:"",conpass:"",number:""})
    })
    .catch((err) => console.log(err));
    }

    else{
      alert('Your password and confirm password didnot match')
    }







    //NAme
    if(name===""){
      setNameMessage("Name cannot be empty!!!")
    }
    else if(!name.match(nameregex)){
      setNameMessage("Your name should be character only")
    }
    else{
      setNameMessage("")
    }

    //Email

    if(email===""){
      setEmailMessage("Email cannot be empty!!!")
    }
    else if(!email.match(emailregex)){
      setEmailMessage("Please type proper email address")
    }
    else{
      setEmailMessage("")
    }

    //password

    if(password===""){
      setPassMessage("Password cannot be empty!!!")
    }
    else if(!password.match(passregex)){
      setPassMessage("The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used")
    }
    else{
      setPassMessage("")
    }


  
    //Number

    if(number===""){
      setNumMessage("Please enter mobile no.")
    }
    else if(!number.match(numregex)){
      setNumMessage("your mobile number should be numeric")
    }
    else if(number.length<10 || number.length>12){
      setNumMessage("Please enter correct mobile no.")
    }
    else{
      setNumMessage("")
    }



  }
  return (
    <>
    <div className='container'>
    <form>
    <div class="mb-3">
      <div className='text-danger'>
        {nameMessage}
      </div>
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" name='name' value={state.name} onChange={handler}/>
  </div>

  <div class="mb-3">
  <div className='text-danger'>
        {emailMessage}
      </div>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={state.email} onChange={handler}/>
  </div>
  
  <div class="mb-3">
  <div className='text-danger'>
        {passMessage}
      </div>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={state.password} onChange={handler}/>
  </div>

  <div class="mb-3">
  <div className='text-danger'>
      </div>
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='conpass' value={state.conpass} onChange={handler}/>
  </div>

  <div class="mb-3">
  <div className='text-danger'>
        {numMessage}
      </div>
    <label for="exampleInputnumber" class="form-label">Mobile</label>
    <input type="text" class="form-control" id="exampleInputnumber" aria-describedby="mobileHelp" name='number' value={state.number} onChange={handler}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={submitdata}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Signup
