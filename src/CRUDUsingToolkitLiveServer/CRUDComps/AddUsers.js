import { useState } from "react"
import { useDispatch } from "react-redux"
import { postUsers } from "../Slice"
const AddUsers=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        if(key==='uname') setUname(e.target.value)
        if(key==='email') setEmail(e.target.value)
        if(key==='phone') setPhone(e.target.value)
        if(key==='address') setAddress(e.target.value)
    }
    const createUser=(e)=>{
        e.preventDefault()
        dispatch(postUsers({fname:uname,email:email,phone:phone,address:address}))
        clearForm()
        alert("Contact added successfully!")
    }
    const handleKey=(e)=>{
        e.preventDefault()
        if(e.key==='Enter') {
            dispatch(postUsers({fname:uname,email:email,phone:phone,address:address}))
            clearForm()
            alert("Contact added successfully!")
        }
    }
    const clearForm=()=>{
        setUname('')
        setEmail('')
        setPhone('')
        setAddress('')
    }
    return(
        <div>
            <form style={{display: 'flex',justifyContent: 'center',margin: '10px',gap: '10px'}}>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}></input>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
                <input type='number' placeholder="Phone" onChange={(e)=>handleChange(e,'phone')} value={phone}></input>
                <input type='text' placeholder="Address" onChange={(e)=>handleChange(e,'address')} value={address}></input>
                <button onClick={(e)=>createUser(e)} onKeyDown={(e)=>handleKey(e)}>Add Contact</button>
            </form>
        </div>
    )
}
export default AddUsers