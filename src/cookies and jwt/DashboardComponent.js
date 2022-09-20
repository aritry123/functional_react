import axios from 'axios'
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials=true // it's very important to add
function DashBoardComponent(){
    const navigate=useNavigate()
    const updateMethod=()=>{
        // axios.post('http://localhost:3001/seecookie',{},{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
        axios.post('http://localhost:3001/createadmin',{
            fname:"faiz",
            email:"faiz@gmail.com",
            password:"faiz@1234",
            phone:84509860456
        },{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    const logoutMethod=()=>{
    //    axios.post('http://localhost:3001/clearcookie',{},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
       axios.post('http://localhost:3001/signout',{},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
       navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>Update</button>
            <button onClick={logoutMethod}>Logout</button>
        </div>
    )
}
export default DashBoardComponent