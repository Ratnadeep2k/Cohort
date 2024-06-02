import { useState } from "react"

/*
 todos =[
    {
        title:"Learn MERN",
        description:"Learn MERN stack",
        completed:false
    },
    {
        title:"Learn React",
        description:"Learn React",
        completed:false
    }
 ]
*/
export function Todos({todos}){
    const [click, setClick] = useState(false);
    function handleClick(){
        setClick(!click);
    }
    return (
        <>
            {todos.map( function(todo,index){
                return ( 
                    <div key ={index}> 
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={handleClick}>{todo.completed == true ? "Completed" :"Mark as completed"}</button>
                        
                    </div>
                )
            })}
        </>
    )
} 