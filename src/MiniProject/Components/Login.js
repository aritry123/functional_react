import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { changeRole, get, setuserid, signinUsers } from "../Slice";
import { useEffect } from "react";
const Login=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {userRole,users}=useSelector((state)=>state.info.data)
    const [user,setUser]=useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        // axios.get('http://localhost:3001/get').then((res)=>{
        //     const obj=res.data.data.find((item)=>item.email===data.email&&item.password===data.password)
        //     if(obj===undefined) return alert("Wrong Username/Password! Please check & try again!")
        //     else{
        //         obj.password==='admin'?navigate('/admin_dashboard'):navigate('/user_dashboard')
        //     }
        // }).catch((err)=>console.log(err))
        dispatch(signinUsers({email:data.email,password:data.password}))
        setUser(users.find((item)=>item.email===data.email))
        // userRole==='admin'?navigate('/admin_dashboard'):navigate('/user_dashboard')
    }
    // const [password,setPassword]=useState('')
    // const [email,setEmail]=useState('')
    // const handleChange=(e,val)=>{
    //     if(val==='password') setPassword(e.target.value)
    //     if(val==='email') setEmail(e.target.value)
    // }
    // const handleLogin=(e)=>{
    //     e.preventDefault()
    //     axios.get('http://localhost:3001/empDetails').then((res)=>{
    //         const obj=res.data.find((item)=>item.email===email&&item.password===password)
    //         console.log(obj)
    //         if(obj===undefined) return alert("Wrong Username/Password! Please check & try again!")
    //         else{
    //             obj.password==='admin'?navigate('/admin'):navigate('/user')
    //         }
    //     }).catch((err)=>console.log(err))
    // }
    useEffect(()=>{
        dispatch(get())
    },[])
    return(
        <>
        {
            userRole==='admin'?
            <>
                {dispatch(changeRole())}
                {navigate('/admin_dashboard',{state:{id:user._id}})}
            </> : userRole==='user'?<>
                {dispatch(changeRole())}
                {dispatch(setuserid(user._id))}
                {localStorage.setItem('userid',user._id)}
                {/* localstorage */}
                {navigate('/user_dashboard')}
            </>:
            <div className="Signin loginbody">
            <section>
                <div className="login">
                    <div className="col-3">
                        <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="img"/>
                    </div>
                    <div className="col-4">
                        <h2>Sign In</h2>
                        <span>Please login to continue!</span>
                        {/* <form id='loginform' className='loginflex loginflex-col'>
                            <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                            <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                            <button onClick={(e)=>handleLogin(e)} className="loginbtn">Login</button>
                            <Link to='/forgot_password'>Forgot Password?</Link>
                            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        </form> */}
                        <form id='loginform' className='loginflex loginflex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' placeholder="Email" {...register("email",{ required : true })}/>
                            {errors.email?.type === "required" && <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>}
                            <input type='password' placeholder="Password" {...register("password",{ required : true })}/>
                            {errors.password?.type === "required" && <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>}
                            <button className="loginbtn">Login</button>
                            <Link to='/forgot_password'>Forgot Password?</Link>
                            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        }
        </>
    )
}
export default Login