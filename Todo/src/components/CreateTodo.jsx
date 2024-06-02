import { useState } from "react";

export function CreateTodo(){
    //react query 
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    function handleClick(){

        fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title: title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("Todo Added")
        })

    }
    return (
        <>
            <input type="text" id="title" placeholder="Title" onChange={(e)=>{const value = e.target.value ; setTitle(e.target.value)}}></input> <br></br>

            <input type="text" id='desc' placeholder="Description" onChange={(e)=>{const value = e.target.value; setDescription(e.target.value)}}></input> <br></br>

            <button onClick={handleClick}>Add Todo</button>
        </>
    )
}