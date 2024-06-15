
import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import {todoAtom} from './atoms'
function App() {


  return (
   <RecoilRoot>
      <Todo id={1}/>
      <Todo id = {2}/>
      <Todo id = {3}/>
      <Todo id ={2}/>
   </RecoilRoot>
  )
}

function Todo({id}){
  const currentTodo = useRecoilValue(todoAtom(id));
  return(
    <div>
      <h1>{currentTodo.title}</h1>
      <p>{currentTodo.description}</p>
    </div>
  )
}

export default App
