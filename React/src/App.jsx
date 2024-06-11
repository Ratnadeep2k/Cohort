import { useState , memo } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
   const logSomething = ()=>{
    console.log("Button Clicked")
   }
  return (
    <>
    <ButtonComponent inputFunction ={logSomething} />
    <button onClick ={()=>{
      setCounter(counter+1)
    }}>Click Me {counter}</button>

    </>
  )
}
  const ButtonComponent = memo(({inputFunction})=>{
    console.log("Child Render") 
    return <button onClick={inputFunction}>Button Clicked</button>
  })
export default App
