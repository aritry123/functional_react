import { useSelector } from "react-redux"
const DashBoard=()=>{
    const result=useSelector((state)=>state.userinfo.state)
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>DashBoard Component</h1>
            <h2>Email: {result.email}</h2>
            <h2>Designation: {result.designation}</h2>
        </div>
    )
}
export default DashBoard