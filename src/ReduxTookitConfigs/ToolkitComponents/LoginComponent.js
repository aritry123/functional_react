import { useDispatch } from "react-redux"
import { useState } from "react";
import {login,logout} from '../Reducers/LoginReducer'
const LoginComponent=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [designation,setDesignation]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        e.preventDefault()
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='designation'){
            setDesignation(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        if(uname===''||email===''||designation==='') return alert("Field empty!")
        dispatch(login({username:uname,email:email,designation:designation}))
        clearForm()
    }
    const handlekey=(e)=>{
        e.preventDefault()
        if(e.key==='Enter') {
            if(uname===''||email===''||designation==='') return alert("Field empty!")
            dispatch(login({username:uname,email:email,designation:designation}))
            clearForm()
        }
    }
    const clearForm=()=>{
        setUname('')
        setEmail('')
        setDesignation('')
    }
    return(
        <form style={{display: 'flex',justifyContent: 'center', gap: '10px',margin: '10px'}}>
           <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}></input>
           <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
           <input type='text' placeholder="Designation" onChange={(e)=>handleChange(e,'designation')} value={designation}></input>
           <button onClick={(e)=>handleLogin(e)} onKeyDown={(e)=>handlekey(e)}>login</button>
        </form>
    )
}
export default LoginComponent