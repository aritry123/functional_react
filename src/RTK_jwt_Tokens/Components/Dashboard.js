import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { update } from '../Slice'
import { logout } from '../Slice'
import { useEffect, useState } from 'react'
function DashBoard(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [id,setId]=useState(0)
    const [flag,setFlag]=useState(false)
    const {token,status}=useSelector((state)=>state.info.data)
    const updateMethod=()=>{
        dispatch(update(token))
    }
    const logoutMethod=()=>{
        console.log("go")
        // setFlag(!flag)
        // setId(1)
        // dispatch(logout(navigate))
        dispatch(logout())
    }
    // useEffect(()=>{
    //     console.log(id)
    //     if(id!==0) {
    //         navigate('/')
    //     }
    // },[flag])
    return(
        <div>
            <button onClick={updateMethod}>Update</button>
            <button>Delete</button>
            <button onClick={logoutMethod}>Logout</button>
        </div>

    )
}
export default DashBoard