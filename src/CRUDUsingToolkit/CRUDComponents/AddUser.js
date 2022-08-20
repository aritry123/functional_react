import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../UserSlice"
const AddUser=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
    }
    const createUser=(e)=>{
        e.preventDefault()
        dispatch(addUser({username:uname,email:email}))
        clearForm()
        alert("Contact added successfully!")
        // this username and email keys should be same as other objects present in the dataset, bcz while displaying them we will set a map for all the objects iteration and will search for username and email keys to display the value on the UI for all the objects.
    }
    const clearForm=()=>{
        setUname('')
        setEmail('')
    }
    return(
        <div>
            <form style={{display: 'flex',justifyContent: 'center',margin: '10px',gap: '10px'}}>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}></input>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
                <button onClick={(e)=>createUser(e)}>Add Contact</button>
            </form>
        </div>
    )
}
export default AddUser