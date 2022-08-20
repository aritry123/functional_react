import { useState } from "react";
import AuthContext from "./AuthContext";
import ConsumerFun from "./ConsumerFun";
import MainPage from "./MainPage";
const AuthProvider=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loginValue,setLogin]=useState(false)
    const handleChange=(e,key)=>{
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=()=>{
        if(username==='admin'&&password==='admin'){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }
    const handleLogout=()=>{
        setLogin(false)
    }
    return(
        <div>
            <AuthContext.Provider value={{loginStatus:loginValue,handleChange:handleChange,handleLogin:handleLogin,handleLogout:handleLogout}}>
                <MainPage></MainPage>
                <ConsumerFun></ConsumerFun>
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider