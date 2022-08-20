import { useEffect, useState } from "react";
import axios from 'axios'
import './ContactManager.css'
const ContactManager=(props)=>{
    const [contact,setContact]=useState([])
    const [username,setUsername]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [flag,setFlag]=useState(false)
    const [uid,setUid]=useState(-1)
    const [post,setPost]=useState(false)
    const [del,setDel]=useState(false)
    const [patch,setPatch]=useState(false)
    useEffect(()=>{
        console.log("useeffect")
        axios.get('http://localhost:3001/empDetails').then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    },[])
    const getClassName=(item)=>{
        if(item.address==='IND') return "country-ind"
        else return "country-us"
    }
    useEffect(()=>{
        console.log("post")
        axios.get('http://localhost:3001/empDetails').then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    },[post])
    useEffect(()=>{
        console.log("delete")
        axios.get('http://localhost:3001/empDetails').then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    },[del])
    useEffect(()=>{
        console.log("patch")
        axios.get('http://localhost:3001/empDetails').then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    },[patch])
    const handleChange=(e,key)=>{
        if(key==='fname') setUsername(e.target.value)
        if(key==='phone') setPhone(e.target.value)
        if(key==='email') setEmail(e.target.value)
        if(key==='address') setAddress(e.target.value)
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:username,
            phone:phone,
            email:email,
            address:address
        }
        axios.post('http://localhost:3001/empDetails',obj).then((res)=>setPost(!post)).catch((err)=>console.log(err))
        clearForm()
    }
    const deleteItem=(itemid)=>{
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>setDel(!del)).catch((err)=>console.log(err))
    }
    const updateItem=(item)=>{
        setUsername(item.fname)
        setPhone(item.phone)
        setEmail(item.email)
        setAddress(item.address)
        setFlag(true)
        setUid(item.id)
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        let obj={
            fname:username,
            phone:phone,
            email:email,
            address:address
        }
        axios.patch(`http://localhost:3001/empDetails/${uid}`,obj).then((res)=>setPatch(!patch)).catch((err)=>console.log(err))
        setUid(-1)
        setFlag(false)
        clearForm()
    }
    const clearForm=()=>{
        setUsername('')
        setPhone('')
        setEmail('')
        setAddress('')
    }
    return(
        <div>
            {console.log("render")}
            <h1>Contact Manager</h1>
            <form>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'fname')} value={username}></input>
                <input type='text' placeholder="Phone" onChange={(e)=>handleChange(e,'phone')} value={phone}></input>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
                <input type='text' placeholder="Address" onChange={(e)=>handleChange(e,'address')} value={address}></input>
                {
                    flag ? <button onClick={(e)=>handleUpdate(e)}>Update Contact</button> : <button onClick={(e)=>handleCreate(e)}>Create Contact</button>
                }
            </form>
            {
                contact.map((item)=>(
                    <div className={getClassName(item)}>
                        <h1>{item.fname}</h1>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <button onClick={(e)=>deleteItem(item.id)}>Delete</button>
                        <button onClick={(e)=>updateItem(item)}>Update</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ContactManager