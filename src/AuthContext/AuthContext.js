import { createContext } from "react";
const AuthContext=createContext({loginStatus:null,handleChange:()=>{},handleLogin:()=>{},handleLogout:()=>{}})
export default AuthContext