import { useState } from "react";
import './ContactManager.css'
const ContactManager=(props)=>{
    const [contact,setContact]=useState(props.data)
    const [username,setUsername]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [flag,setFlag]=useState(false)
    const [uid,setUid]=useState(-1)
    const getClassName=(item)=>{
        if(item.address==='IND') return "country-ind"
        else return "country-us"
    }
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
        setContact([...contact,obj])
        clearForm()
    }
    const deleteItem=(itemid)=>{
        const result=contact.filter((item)=>item.id!==itemid)
        setContact(result)
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
        let temp=[...contact]
        let obj=temp.find((item)=>item.id===uid)
        obj.fname=username
        obj.phone=phone
        obj.email=email
        obj.address=address
        setContact(temp)
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