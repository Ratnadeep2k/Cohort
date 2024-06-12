import {useContext, useState} from 'react'
import { CountContext } from './Home';

export default function Dashboard(){
   const [count, setCount] = useState(0);
   return (
   <div>
        <CountContext.Provider value ={{count,setCount}}>
        <Count count ={setCount}/>
        </CountContext.Provider>
  </div>
  )
}
function Count({setCount}){
    return <div>
        <CountRenderer/>
        <Buttons setCount = {setCount}/>
    </div>
}
function CountRenderer(){
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}
function Buttons(){
    const {count,setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase </button>
    <button onClick ={()=>{setCount(count-1)}}>Decrease </button>
  </div>
}
