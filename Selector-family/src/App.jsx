import { useState } from 'react'
import {RecoilRoot,useRecoilState} from 'recoil'
import './App.css'
import { todosAtomFamily } from './atoms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
    </RecoilRoot>
  )
}
function Todo({id}){
  const [todo,setTodo] = useRecoilState(todosAtomFamily(id));
  return <>
    {todo.title}
    {todo.description}
    <br/>
  </>
}

export default App
