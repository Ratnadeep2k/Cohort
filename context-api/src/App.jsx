import {lazy,Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
const  Dashboard = lazy(()=> import('./components/Dashboard'))
import { Landing } from './components/Landing'
import { CountContext } from './components/Home'

function App() {


  return (  
    <div>
      <div>
        <button onClick={()=>{
          window.location.href='/'
        }}>
          Landing page 
        </button>
        <button onClick={()=>{
          window.location.href='/dashboard'
        }}>
          Dashboard page
        </button>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
        <Route path="/landing" element={<Landing />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
