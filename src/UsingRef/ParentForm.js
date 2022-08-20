import { useRef, useState } from "react"
import ChildForm from "./ChildForm"
function ParentForm(){
    const fnameRef=useRef()
    const passwordRef=useRef()
    const [fname,setFname]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(fnameRef)
        console.log(passwordRef)
        setFname(fnameRef.current.value)
        setPassword(passwordRef.current.value)
    }
    return(
        <div>
            <h1>Simple Ref in functional component</h1>
            <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}}>
                <ChildForm ref={[fnameRef,passwordRef]}></ChildForm>
                <button onClick={(e)=>handleLogin(e)}>Login</button>
            </form>
            <h2>{fname}</h2><br/>
            <h2>{password}</h2>
        </div>
    )
}
export default ParentForm