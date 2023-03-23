import { Profiler, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Not_found_404 from './components/Not_found_404.tsx'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Signup/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<Not_found_404/>}/>
        </Routes>

      </BrowserRouter>

      
      
    
    
  )
}

export default App
