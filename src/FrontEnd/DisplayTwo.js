import axios from "axios"
import { useState } from "react"
const DisplayTwo=()=>{
    const [signinData,setSigninData]=useState({})
    const [deleteData,setDeleteData]=useState({})
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [f,setF]=useState(true)
    const [d,setD]=useState(false)
    const handleSigin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signin',{email:email,password:pass}).then((res)=>{
            setSigninData(res.data)
            setF(!f)
            console.log(res)
        }).catch((err)=>console.log(err))
    }
    const handleDelete=(e)=>{
        axios.post('http://localhost:3001/delete',{},{
            headers:{
                authorization:'Bearer '+signinData.accesstoken
            }
        }).then((res)=>{
            setDeleteData(res.data)
            setD(!d)
        }).catch((err)=>console.log(err))
    }
    const handleChange=(e,val)=>{
        if(val==='email') setEmail(e.target.value)
        if(val==='pass') setPass(e.target.value)
    }
    const handleSignout=(e)=>{
        setD(!d)
        setF(!f)
    }
    return(
        <div>
            {
                f ? 
                <form>
                    <input placeholder="Email" type='text' onChange={(e)=>handleChange(e,'email')}></input>
                    <input placeholder="Password" type='text' onChange={(e)=>handleChange(e,'pass')}></input>
                    <button onClick={(e)=>handleSigin(e)}>Signin</button>
                </form> : <>
                {
                    signinData.status ? <>
                    <h1>{signinData.msg}</h1>
                    <button onClick={(e)=>handleDelete(e)}>Delete</button>
                    {
                        d ? 
                        <>
                        <h1>{deleteData.msg}</h1>
                        <button onClick={(e)=>handleSignout(e)}>Signout</button>
                        </>
                        : <></>
                    }
                    </> : <>
                    <h1>{signinData.msg}</h1>
                    </>
                }
                </>
            }
        </div>
    )
}
export default DisplayTwo