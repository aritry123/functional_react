import axios from "axios"
import { useEffect, useState } from "react"
const Display=()=>{
    const [data,setData]=useState([])
    const [uname,setUname]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:3001/home').then((res)=>setData(res.data)).catch((err)=>console.log(err))
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setData([...data,{fname:uname}])
    }
    const handleChange=(e)=>{
        setUname(e.target.value)
    }
    return(
        <div>
            <form>
                <input placeholder="Username" type='text' onChange={(e)=>handleChange(e)}/>
                <input placeholder="Phone" type='number'/>
                <input placeholder="Address" type='text'/>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
            {
                data.map((item)=>(
                    <h1>{item.fname}</h1>
                ))
            }
        </div>
    )
}
export default Display