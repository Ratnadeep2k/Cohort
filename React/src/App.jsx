import { useState ,useMemo } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [input,setInput] = useState(1);

  // let count =0;
  // for( let i=0;i<=input ;i++){
  //   count = count+i;
  // }

   let count =useMemo(()=>{
    let Fcount =0;
    for( let i=0;i<=input ;i++){
      Fcount = Fcount+i;
    }
    return Fcount;
   },[input])
  return (
    <>
    <input onChange={function(e){
      setInput(e.target.value);
    }}></input> <br/>
    Sum from 1 to {input} is {count}
    <br/>
    <button  onClick={()=>{
      setCounter(counter+1);
    }}>Counter {counter}</button>

    </>
  )
}

export default App
