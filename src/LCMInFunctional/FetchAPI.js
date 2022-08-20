import axios from "axios"
import { useEffect,useState } from "react"
const FetchAPI=(props)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        async function callAPI() {
            try {
                const res = await axios.get('http://localhost:3001/empDetails')
                setData(res.data)
            }
            catch(e) {
                console.log(e)
            }
        }
        callAPI()
    },[])
    return(
        <div>
            <h1>Fetch API</h1>
            {
                data.map((item)=>(
                    <h1>{item.fname}</h1>
                ))
            }
        </div>
    )
}
export default FetchAPI