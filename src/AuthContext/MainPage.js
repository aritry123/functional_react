import AuthContext from "./AuthContext"
import { useContext } from "react"
const MainPage=()=>{
    const {loginStatus,handleChange,handleLogin,handleLogout}=useContext(AuthContext)
    return(
        <div>
            <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,"username")}></input>
            <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,"password")}></input>
            <button onClick={handleLogin}>Login</button>
            {
                loginStatus?<h1>Main Page---</h1>:<h1>Please Login!</h1>
            }
        </div>
    )
}
export default MainPage