import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
function LoginCookies(){
    const navigate=useNavigate()
    const cookies = new Cookies();
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
        axios.post('http://localhost:3001/signin',{email:useremail,password:userpassword}).then((res)=>{
            if(!res.data.status) return alert("Unauthorized!")
            cookies.set('accesstoken',res.data.accesstoken,{sameSite:'strict',path:'/'}) // ,maxAge:30
            setStatus(res.data.status)
        }).catch((e)=>console.log(e))
    }
    return(
        <div>
            {
                status?navigate('/dashboard'):<form>
                    <input type='text' placeholder='Email' onChange={(e)=>handleChange(e,'email')}></input>
                    <input type='text' placeholder='Password' onChange={(e)=>handleChange(e,'password')}></input>
                    <button onClick={(e)=>handleLogin(e)}>Login</button>
                </form>
            }
        </div>
    )
}
export default LoginCookies