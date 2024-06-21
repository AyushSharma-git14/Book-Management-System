import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src="images/pngegg.png" width={130} height={50} alt=""/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/createbook">Create-Book</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/fetch">Fetch</Link>
        </li>
        
     
      </ul>
      
       
      <button type="button" class="btn btn-info"><Link class="nav-link" to="/signup">Sign UP</Link></button>
      <button type="button" class="btn btn-danger"><Link class="nav-link" to="/login">Login</Link></button>
  
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
