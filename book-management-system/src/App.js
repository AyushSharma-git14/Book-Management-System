import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './compo/Header'
import Home from './compo/Home'
import Signup from './compo/Signup'
import Createbook from './compo/Createbook'
import Fetch from './compo/Fetch'
import Update from './compo/Update'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/createbook' element={<Createbook/>}></Route>
      <Route path='/fetch'  element={<Fetch/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

