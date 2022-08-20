import { useState } from "react";
const WelcomePage=(props)=>{
    const [username,setUsername] = useState("")
    const [inpUser,setInp] = useState("")
    const handleChange=(e)=>{
        setInp(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUsername(inpUser)
    }
    return(
        <div>
            <h2>{username}</h2>
            Username: <input type='text' placeholder="Enter Username" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}
export default WelcomePage