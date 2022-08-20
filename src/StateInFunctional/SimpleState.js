import { useState } from "react";
const SimpleState=(props)=>{
    const count = useState(0)
    const increment=(e)=>{
        e.preventDefault()
        count[1](count[0] + 1)
    }
    return(
        <div>
            {console.log(count)}
            <h1>State Component</h1>
            <h2>Count: {count[0]}</h2>
            <button onClick={(e)=>increment(e)}>+</button>
        </div>
    )
}
export default SimpleState