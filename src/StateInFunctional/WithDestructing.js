import { useState } from "react";
const WithDestructing=(props)=>{
    const [count,setCount]=useState(0)
    const increment=(e)=>{
        e.preventDefault()
        setCount(count+1)
    }
    const decrement=(e)=>{
        e.preventDefault()
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={(e)=>increment(e)}>+</button>
            {count}
            <button onClick={(e)=>decrement(e)}>-</button>
        </div>
    )
}
export default WithDestructing