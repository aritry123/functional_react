import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { login } from '../Slice'
function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {token,status}=useSelector((state)=>state.info.data)
    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
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
        dispatch(login({useremail:useremail,userpassword:userpassword}))
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
export default Login