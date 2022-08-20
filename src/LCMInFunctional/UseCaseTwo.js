import { useEffect,useState } from "react"
const UseCaseTwo=(props)=>{
    const [count,setCount]=useState(0)
    useEffect(
    ()=>{
        console.log('useeffect is called')
    },[])/**will be rendered only after initial render */
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <div>
            {console.log("render")}
            <h1>{props.msg}</h1>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default UseCaseTwo