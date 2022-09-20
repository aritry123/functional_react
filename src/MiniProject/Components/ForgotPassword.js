import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { updateUsers } from "../Slice";
import './ForgotPassword.css'
import { Link } from "react-router-dom";
const ForgotPassword=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [createPass,setCreatePass]=useState('')
    const [newPass,setNewPass]=useState('')
    const [secretCode,setSecretCode]=useState('')
    const [emailStatus,setEmailStatus]=useState(false)
    const [createPassStatus,setCreatePassStatus]=useState(false)
    const [newPassStatus,setNewPassStatus]=useState(false)
    const [secretCodeStatus,setSecretCodeStatus]=useState(false)
    const [activeSearch,setActiveSearch]=useState(false)
    const [activePass,setActivePass]=useState(false)
    const [searchBtnPressed,setSearchBtnPressed]=useState(false)
    const [passBtnPressed,setPassBtnPressed]=useState(false)
    const [id,setId]=useState(-1)
    const [secret,setSecret]=useState('')
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        if(searchBtnPressed) {
            if(!email) setEmailStatus(true)
            else setEmailStatus(false)
        }
        if(passBtnPressed) {
            if(!secretCode) setSecretCodeStatus(true)
            else setSecretCodeStatus(false)
            if(!createPass) setCreatePassStatus(true)
            else setCreatePassStatus(false)
            if(!newPass) setNewPassStatus(true)
            else setNewPassStatus(false)
        }
    },[activeSearch,activePass])
    const handleChange=(e,val)=>{
        setActiveSearch(!activeSearch)
        setActivePass(!activePass)
        if(val==='email') setEmail(e.target.value)
        if(val==='createPass') setCreatePass(e.target.value)
        if(val==='newPass') setNewPass(e.target.value)
        if(val==='secretCode') setSecretCode(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearchBtnPressed(true)
        setActiveSearch(!activeSearch)
        setCreatePassStatus(false)
        setNewPassStatus(false)
        setSecretCodeStatus(false)
        setPassBtnPressed(false)
        if(!email) {
            setFlag(false)
        }
        else {
            axios.get('http://localhost:3002/get').then((res)=>{
                const obj=res.data.data.find((item)=>item.email===email)
                    if(obj===undefined) {
                        setFlag(false)
                        return alert("Email address doesn't exist!")
                    }
                    else {
                        setId(obj._id)
                        setSecret(obj.secretCode)
                        setFlag(true)
                    }
            }).catch((err)=>console.log(err))
        }
    }
    const handlePass=(e)=>{
        e.preventDefault()
        setPassBtnPressed(true)
        setActivePass(!activePass)
        if(createPass&&newPass&&secretCode) {
            if(secretCode===secret) {
                if(createPass===newPass){
                    dispatch(updateUsers({id:id,password:newPass}))
                    setId(-1)
                    setSecret('')
                    setFlag(false)
                    clearStatus()
                    navigate('/')
                }
                else return alert("Passwords unmatched!")
            }
            else return alert("Wrong Secret Code! Try again!")
        }
    }
    const clearStatus=()=>{
        setSearchBtnPressed(false)
        setPassBtnPressed(false)
        setActiveSearch(false)
        setActivePass(false)
        setEmailStatus(false)
        setCreatePassStatus(false)
        setNewPassStatus(false)
        setSecretCodeStatus(false)
    }
    return(
        <div className="pass passbody">
            <section>
                <div className="forgot">
                <div className="col-5">
                <p style={{marginLeft: '-260px'}}><Link className="back" to='/'><i className="fa-solid fa-arrow-left-long"></i><h8> Back</h8></Link></p>
                    <h2>Change Password</h2>
                    <span>Create your new password here!</span>
                    <form id='passform' className='passflex passflex-col'>
                    <input type='text' placeholder="Search your email address" onChange={(e)=>handleChange(e,'email')} value={email} disabled={flag}/>
                    {
                        emailStatus?<p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>:<></>
                    }
                    <button onClick={(e)=>handleSearch(e)} className='passbtn' disabled={flag}>Search</button>
                    </form>
                    {
                        flag?<>
                        <form id='passform' className='passflex passflex-col'>
                            <input type='text' placeholder="Enter Secret Code" onChange={(e)=>handleChange(e,'secretCode')} value={secretCode}/>
                            {
                                secretCodeStatus?<p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>:<></>
                            }
                            <input type='password' placeholder="Create new password" onChange={(e)=>handleChange(e,'createPass')} value={createPass}/>
                            {
                                createPassStatus?<p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>:<></>
                            }
                            <input type='password' placeholder="Confirm new password" onChange={(e)=>handleChange(e,'newPass')} value={newPass}/>
                            {
                                newPassStatus?<p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '-170px'}}>This field is required!</p>:<></>
                            }
                            <button onClick={(e)=>handlePass(e)} className='passbtn'>Change Password</button>
                        </form>
                        </>:<></>
                    }
                </div>
                </div>
            </section>
        </div>
    )
}
export default ForgotPassword