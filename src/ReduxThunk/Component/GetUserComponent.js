import { useEffect, useState } from "react"

const GetUserComponent=(props)=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [flag,setFlag]=useState(false)
    const [uid,setUid]=useState(-1)
    useEffect(()=>{
        props.getUserData()
    },[])
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='address') setAddress(e.target.value)
    }
    const clearForm=()=>{
        setUname('')
        setEmail('')
        setPhone('')
        setAddress('')
    }
    const handleClick=(e,val)=>{
        e.preventDefault()
        if(val==='add') {
            props.postUserData(uname,email,phone,address)
            clearForm()
        }
        if(val==='update') {
            props.updateUserData(uid,uname,email,phone,address)
            setUid(-1)
            setFlag(!flag)
            clearForm()
        }
    }
    const handleDelete=(e,itemid)=>{
        e.preventDefault()
        props.deleteUserData(itemid)
    }
    const handleUpdate=(e,itemid)=>{
        e.preventDefault()
        let temp=props.users.find((item)=>item.id===itemid)
        setUname(temp.fname)
        setEmail(temp.email)
        setPhone(temp.phone)
        setAddress(temp.address)
        setUid(itemid)
        setFlag(!flag)
    }
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>User Details</h1><br/>
            <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}}>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}></input>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}></input>
                <input type='number' placeholder="Phone" onChange={(e)=>handleChange(e,'phone')} value={phone}></input>
                <input type='text' placeholder="Address" onChange={(e)=>handleChange(e,'address')} value={address}></input>
                {flag ? <button onClick={(e)=>handleClick(e,'update')}>Update</button> : <button onClick={(e)=>handleClick(e,'add')}>Add</button>}
            </form><br/>
            {
                props.isLoading===false ? <>
                <div className="row">
                {
                props.users.map((item)=>(
                    <div className="col-sm-12 col-lg-3">
                    <div style={{border: 'solid',width: '290px',margin: '5px'}}>
                    <h2>{item.fname}</h2>
                    <h2>{item.email}</h2>
                    <h2>{item.phone}</h2>
                    <h2>{item.address}</h2>
                    <button onClick={(e)=>handleDelete(e,item.id)}>Delete</button>
                    <button onClick={(e)=>handleUpdate(e,item.id)}>Update</button>
                    <br/>
                    </div>
                    </div>
                ))
                }
                </div>
                </> : <></>
            }
        </div>
    )
}
export default GetUserComponent