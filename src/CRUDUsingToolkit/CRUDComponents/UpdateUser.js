import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../UserSlice"
const UpdateUser=()=>{
    const [id,setID]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        if(key==='id'){
            setID(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
    }
    const modifyUser=(e)=>{
        e.preventDefault()
        dispatch(updateUser({userid:id,newemail:email}))
        clearForm()
        alert("Contact updated successfully!")
    }
    const clearForm=()=>{
        setID('')
        setEmail('')
    }
    return(
        <div>
            <form style={{display: 'flex',justifyContent: 'center',margin: '10px',gap: '10px'}}>
                <input type='text' placeholder="User ID" onChange={(e)=>handleChange(e,'id')} value={id}></input>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
                <button onClick={(e)=>modifyUser(e)}>Update Contact</button>
            </form>
        </div>
    )
}
export default UpdateUser