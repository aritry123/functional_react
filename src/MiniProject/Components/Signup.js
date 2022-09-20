// import { useContext } from "react"
// import Context from "../Context"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { postUsers } from "../Slice"
import axios from "axios";
import './Signup.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Signup=()=>{
    // const {uname,password,email,fname,city,country,handleChange,handleSubmit}=useContext(Context)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [uname,setUname]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [fname,setFname]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [secret,setSecret]=useState('')
    const [flag,setFlag]=useState(false)
    const [vis,setVis]=useState(0)
    const [active,setActive]=useState(false)
    const [btnPressed,setBtnPressed]=useState(false)
    const [isBtnPressed,setIsBtnPressed]=useState(false)
    const [unameStatus,setUnameStatus]=useState(false)
    const [passwordStatus,setPasswordStatus]=useState(false)
    const [emailStatus,setEmailStatus]=useState(false)
    const [fnameStatus,setFnameStatus]=useState(false)
    const [cityStatus,setCityStatus]=useState(false)
    const [countryStatus,setCountryStatus]=useState(false)
    const [secretStatus,setSecretStatus]=useState(false)
    const [toBeSubmitted,setToBeSubmitted]=useState(false)
    useEffect(()=>{
        if(vis>0){
            if(flag===true){
                setFlag(false)
                setToBeSubmitted(false)
                return alert("Username/Email/Password/Secret Code has to be unique!")
            }else{
                if(uname&&password&&email&&fname&&city&&country&&secret&&btnPressed){
                    clearFormStatus()
                    setToBeSubmitted(true)
                    setIsBtnPressed(false)
                    const role=password==="admin"?"admin":"user"
                    if(toBeSubmitted) {
                        dispatch(postUsers({uname:uname,password:password,email:email,fname:fname,city:city,country:country,role:role,secretCode:secret}))
                        navigate('/')
                    }
                }else {
                    setToBeSubmitted(false)
                    // return alert("Field empty!")
                    if(!uname) setUnameStatus(true)
                    else setUnameStatus(false)
                    if(!password) setPasswordStatus(true)
                    else setPasswordStatus(false)
                    if(!email) setEmailStatus(true)
                    else setEmailStatus(false)
                    if(!fname) setFnameStatus(true)
                    else setFnameStatus(false)
                    if(!city) setCityStatus(true)
                    else setCityStatus(false)
                    if(!country) setCountryStatus(true)
                    else setCountryStatus(false)
                    if(!secret) setSecretStatus(true)
                    else setSecretStatus(false)
                }
            }
            setBtnPressed(false)
        }
        setVis(1)
    },[active])
    const handleChange=(e,val)=>{
        if(isBtnPressed) setActive(!active)
        if(val==='uname') setUname(e.target.value)
        if(val==='password') setPassword(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='fname') setFname(e.target.value)
        if(val==='city') setCity(e.target.value)
        if(val==='country') setCountry(e.target.value)
        if(val==='secret') setSecret(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setToBeSubmitted(true)
        axios.get('http://localhost:3002/get').then((res)=>{
            res.data.data.map((item)=>{
                if(item.uname===uname||item.email===email||item.secretCode===secret||item.password===password&&item.password!=='admin'){
                    setFlag(true)
                }
            })
            setActive(!active)
            setBtnPressed(true)
            setIsBtnPressed(true)
        }).catch((err)=>console.log(err))
    }
    const clearForm=()=>{
        setUname('')
        setPassword('')
        setEmail('')
        setFname('')
        setCity('')
        setCountry('')
        setSecret('')
    }
    const clearFormStatus=()=>{
        setUnameStatus(false)
        setPasswordStatus(false)
        setEmailStatus(false)
        setFnameStatus(false)
        setCityStatus(false)
        setCountryStatus(false)
        setSecretStatus(false)
    }
    return(
        // <div style={{padding: '246px',backgroundImage: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg")`}}>
        //     <h1>Signup</h1>
            // <form>
            //     <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}/>
            //     <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={password}/>
            //     <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}/>
            //     <input type='text' placeholder="Name" onChange={(e)=>handleChange(e,'fname')} value={fname}/>
            //     <input type='text' placeholder="City" onChange={(e)=>handleChange(e,'city')} value={city}/>
            //     <input type='text' placeholder="Country" onChange={(e)=>handleChange(e,'country')} value={country}/>
            //     <button onClick={(e)=>handleSubmit(e)}>Signup</button>
            // </form>
        // </div>
        <div className="Signup body">
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2>Sign Up</h2>
                        <span>Create your account if you are new here!</span>
                        <form id='form' className='flex flex-col'>
                            <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}/>
                            {
                                unameStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='password' placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={password}/>
                            {
                                passwordStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}/>
                            {
                                emailStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='text' placeholder="Name" onChange={(e)=>handleChange(e,'fname')} value={fname}/>
                            {
                                fnameStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='text' placeholder="City" onChange={(e)=>handleChange(e,'city')} value={city}/>
                            {
                                cityStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='text' placeholder="Country" onChange={(e)=>handleChange(e,'country')} value={country}/>
                            {
                                countryStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <input type='text' placeholder="Secret Code" onChange={(e)=>handleChange(e,'secret')} value={secret}/>
                            {
                                secretStatus ? <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p> : <></>
                            }
                            <button onClick={(e)=>handleSubmit(e)} className="btn">Signup</button>
                            <p>Alreay have an account? <Link to='/'>Sign In</Link></p>
                        </form>
                    </div>
                    <div className="col-2">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/611/709/original/woman-looking-at-smartphone-and-choosing-items-to-order-concept-illustration-for-online-shopping-woman-surfing-the-internet-free-vector.jpg" alt="img"/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Signup