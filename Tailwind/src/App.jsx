import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style ={{display:'flex',justifyContent:'space-around'}}> 
            <div style ={{background:"red"}}>
              Hii
            </div>
            <div style ={{background:"blue"}}>
              Hello
              </div>
      </div>

    </>
  )
}

export default App
