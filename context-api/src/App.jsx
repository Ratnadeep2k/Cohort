
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

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
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
