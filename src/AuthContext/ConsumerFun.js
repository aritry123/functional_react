import { useContext } from "react"
import AuthContext from "./AuthContext"
import { ClassConsumer } from "./ClassConsumer"
const ConsumerFun=()=>{
    const {loginStatus,handleChange,handleLogin,handleLogout}=useContext(AuthContext)
    return(
        <div>
            <ClassConsumer handleLogout={handleLogout}></ClassConsumer>
        </div>
    )
}
export default ConsumerFun