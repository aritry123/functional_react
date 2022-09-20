import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function DashBoardToken(){
    const navigate=useNavigate()
    const updateMethod=()=>{
        axios.post('http://localhost:3001/update',{},{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('accesstoken')
            }
        }).then((Res)=>console.log(Res)).catch((e)=>{
            // if(e.response.data.reason==='jwt expired') return alert("Session expired! Please login again!")
            console.log(e)})
    }
    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>Update</button>
            <button>Delete</button>
            <button onClick={logoutMethod}>Logout</button>
        </div>

    )
}
export default DashBoardToken