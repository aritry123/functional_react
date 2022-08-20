import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, removeUser } from "../UserSlice"
const ViewUsers=()=>{
    const dispatch=useDispatch()
    const {loading,usersData}=useSelector((state)=>state.userinfo.value)
    const handleDelete=(itemid)=>{
        dispatch(removeUser({userid:itemid}))
    }
    // useEffect(()=>{
    //     dispatch(fetchUsers())
    // },[dispatch])
    return(
        <div>
            <h1>List of Users---</h1>
            {
                loading===false ? <>
                <div className="row">
                {
                usersData.map((item)=>(
                    <div className="col-sm-12 col-lg-4" style={{border: 'solid',width: '400px',margin: '10px'}}>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                ))
                }
                </div>
                </> : <></>
            }
        </div>
    )
}
export default ViewUsers