import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials=true
function LoginComponent(){
    const navigate=useNavigate()
    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
    const [status,setStatus]=useState(false)
    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        // axios.post('http://localhost:3001/login',{email:useremail,password:userpassword}).then((res)=>{
        //     console.log(res.data.msg)
        //     setStatus(res.data.status)
        // }).catch((e)=>console.log(e))
        axios.post('http://localhost:3001/signin',{email:useremail,password:userpassword}).then((res)=>{
            console.log(res.data.msg)
            setStatus(res.data.status)
        }).catch((e)=>console.log(e))
    }
    const handleSee=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/seecookie',{},{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    return(
        <div>
            {
                status?navigate('/dashboard'):<form>
                    <input type='text' placeholder='Email' onChange={(e)=>handleChange(e,'email')}></input>
                    <input type='text' placeholder='Password' onChange={(e)=>handleChange(e,'password')}></input>
                    <button onClick={(e)=>handleLogin(e)}>Login</button>
                    {/* <button onClick={(e)=>handleSee(e)}>See Cookie</button> */}
                </form>
            }
        </div>
    )
}
export default LoginComponent