import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { get, remove, update } from '../Slice'
import { logout } from '../Slice'
import { useEffect, useState } from 'react'
import { add } from '../Slice'
function DashBoard(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [id,setId]=useState(-1)
    const [flag,setFlag]=useState(false)
    const {token,status,details,loading}=useSelector((state)=>state.info.data)
    const [uname,setUname]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const logoutMethod=(e)=>{
        e.preventDefault()
        dispatch(logout())
        navigate('/login')
    }
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='address') setAddress(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        if(!uname||!phone||!address) return alert("Field empty!")
        dispatch(add({fname:uname,phone:phone,address:address,token:token}))
        clearForm()
    }
    const handleDelete=(itemid)=>{
        dispatch(remove({token:token,id:itemid}))
        clearForm()
        setFlag(false)
    }
    const handleUpdate=(item)=>{
        setFlag(!flag)
        setUname(item.Fname)
        setPhone(item.Phone)
        setAddress(item.Address)
        setId(item._id)
    }
    const handleUp=(e)=>{
        e.preventDefault()
        if(!uname||!phone||!address) return alert("Field empty!")
        dispatch(update({token:token,id:id,fname:uname,phone:phone,address:address}))
        setId(-1)
        setFlag(!flag)
        clearForm()
    }
    const clearForm=()=>{
        setUname('')
        setPhone('')
        setAddress('')
    }
    useEffect(()=>{
        dispatch(get())
    },[])
    return(
        <div>
            {console.log(token)}
            <form>
                <input type='text' placeholder='Username' onChange={(e)=>handleChange(e,'uname')} value={uname}></input>
                <input type='number' placeholder='Phone' onChange={(e)=>handleChange(e,'phone')} value={phone}></input>
                <input type='text' placeholder='Address' onChange={(e)=>handleChange(e,'address')} value={address}></input>
                {
                    flag ? <button onClick={(e)=>handleUp(e)}>Update Contact</button> : <button onClick={(e)=>handleAdd(e)}>Add Contact</button>
                }
                <button onClick={(e)=>logoutMethod(e)}>Logout</button>
            </form>
            {
                loading ? <></> : <>
                {
                    details.map((item)=>(
                        <>
                        <h1>{item.Fname}</h1>
                        <p>{item.Phone}</p>
                        <p>{item.Address}</p>
                        <button onClick={(e)=>handleDelete(item._id)}>Delete</button>
                        <button onClick={(e)=>handleUpdate(item)}>Update</button>
                        </>
                    ))
                }
                </>
            }
        </div>

    )
}
export default DashBoard