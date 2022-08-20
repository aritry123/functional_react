import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { updateUsers } from "../Slice"
const UpdateUsers=()=>{
    const dispatch=useDispatch()
    const location=useLocation()
    const [id,setId]=useState(location.state.id)
    const [uname,setUname]=useState(location.state.fname)
    const [email,setEmail]=useState(location.state.email)
    const [phone,setPhone]=useState(location.state.phone)
    const [address,setAddress]=useState(location.state.address)
    const handleChange=(e,key)=>{
        if(key==='uname') setUname(e.target.value)
        if(key==='email') setEmail(e.target.value)
        if(key==='phone') setPhone(e.target.value)
        if(key==='address') setAddress(e.target.value)
    }
    const modifyUser=(e)=>{
        e.preventDefault()
        dispatch(updateUsers({id:id,fname:uname,email:email,phone:phone,address:address}))
        clearForm()
        alert("Contact updated successfully!")
    }
    const handleKey=(e)=>{
        e.preventDefault()
        if(e.key==='Enter') {
            dispatch(updateUsers({id:id,fname:uname,email:email,phone:phone,address:address}))
            clearForm()
            alert("Contact updated successfully!")
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
                <button onClick={(e)=>modifyUser(e)} onKeyDown={(e)=>handleKey(e)}>Update Contact</button>
            </form>
        </div>
    )
}
export default UpdateUsers