import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-blue-500 '>Hi</div>
        <div className='bg-green-500'>Hi</div>
      </div>
    </>
  )
}

export default App
 