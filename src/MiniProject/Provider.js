import Context from "./Context";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { postUsers } from "./Slice"
import Signup from "./Components/Signup";
import axios from "axios";
const Provider=()=>{
    const dispatch=useDispatch()
    const [uname,setUname]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [fname,setFname]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [flag,setFlag]=useState(false)
    const [vis,setVis]=useState(0)
    const [active,setActive]=useState(false)
    useEffect(()=>{
        console.log("useeffect")
        console.log(flag)
        if(vis>0){
            if(flag===true){
                // clearForm()
                setFlag(false)
                return alert("Username/Email/Password has to be unique!")
            }else{
                if(uname!==''||password!==''||email!==''||fname!==''||city!==''||country!==''){
                    const role=password==="admin"?"admin":"user"
                    dispatch(postUsers({id:Date.now(),uname:uname,password:password,email:email,fname:fname,city:city,country:country,role:role}))
                    // clearForm()
                    
                }else return alert("Field empty!")
            }
        }
        setVis(1)
    },[active])
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='password') setPassword(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='fname') setFname(e.target.value)
        if(val==='city') setCity(e.target.value)
        if(val==='country') setCountry(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.get('http://localhost:3001/empDetails').then((res)=>{
            res.data.map((item)=>{
                if(item.uname===uname||item.email===email||item.password===password&&item.password!=='admin'){
                    setFlag(true)
                    // clearForm()
                    // return alert("Username/Email/Password has to be unique!")
                }
            })
            setActive(!active)
            // if(flag===false){
            //     if(uname!==''||password!==''||email!==''||fname!==''||city!==''||country!==''){
            //         const role=password==="admin"?"admin":"user"
            //         dispatch(postUsers({id:Date.now(),uname:uname,password:password,email:email,fname:fname,city:city,country:country,role:role}))
            //         clearForm()
            //     }else return alert("Field empty!")
            // }
            // setFlag(false)
        }).catch((err)=>console.log(err))
    }
    const clearForm=()=>{
        setUname('')
        setPassword('')
        setEmail('')
        setFname('')
        setCity('')
        setCountry('')
    }
    return(
        <div>
            <Context.Provider value={{uname:uname,password:password,email:email,fname:fname,city:city,country:country,handleChange:handleChange,handleSubmit:handleSubmit}}>
                <Signup></Signup>
            </Context.Provider>
        </div>
    )
}
export default Provider