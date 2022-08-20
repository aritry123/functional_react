import { useState } from "react";
const UsingStateObj=(props)=>{
    const [obj,setObj] = useState({
        uname:"",
        input:""
    })
    const [count,setCount] = useState(0)
    const handleChange=(e)=>{
        setObj((prev)=>{
            return {
                ...prev,
                input:e.target.value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setObj((prev)=>{
            return {
                ...prev,
                uname:obj.input
            }
        })
    }
    const handleCount=()=>{
        setCount((prev)=>{
            // return count + 1
            return prev + 1
        })
    }
    return(
        <div>
            <h1>{obj.uname}</h1>
            Username: <input type='text' placeholder="Enter Username" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            <h1>{count}</h1>
            <button onClick={handleCount}>+</button>
        </div>
    )
}
export default UsingStateObj