import { Profiler, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'


function App() {
  const [count, setCount] = useState("  ")

  useEffect(() => {console.log(count)});

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Signup/>}/>
          <Route path='/signup' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>

      </BrowserRouter>

      
      
    
    
  )
}

export default App
