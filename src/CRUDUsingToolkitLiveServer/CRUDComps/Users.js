import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteUsers } from "../Slice"
const Users=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loading,usersData}=useSelector((state)=>state.userinfo.value)
    const handleDelete=(itemid)=>{
        dispatch(deleteUsers(itemid))
    }
    const handleUpdate=(itemid,fname,email,phone,address)=>{
        navigate('/update',{state:{id:itemid,fname:fname,email:email,phone:phone,address:address}})
    }
    return(
        <div>
            <h1>List of Users---</h1>
            {
                loading===false ? <>
                <div className="row">
                {
                usersData.map((item)=>(
                    <div className="col-sm-12 col-lg-4" style={{border: 'solid',width: '400px',margin: '10px'}}>
                        <h1>{item.fname}</h1>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.address}</p>
                        <button onClick={()=>handleDelete(item.id)} style={{margin: '10px'}}>Delete</button>
                        <button onClick={()=>handleUpdate(item.id,item.fname,item.email,item.phone,item.address)}>Update</button>
                    </div>
                ))
                }
                </div>
                </> : <></>
            }
        </div>
    )
}
export default Users