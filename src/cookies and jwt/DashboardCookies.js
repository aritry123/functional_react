import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
function DashBoardCookies(){
    const navigate=useNavigate()
    const cookies = new Cookies();
    const updateMethod=()=>{
        console.log(cookies.get('accesstoken'))
    }
    const logoutMethod=()=>{
       cookies.remove('accesstoken')
       navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>Update</button>
            <button onClick={logoutMethod}>Logout</button>
        </div>
    )
}
export default DashBoardCookies