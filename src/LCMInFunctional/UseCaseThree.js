import { useEffect,useState } from "react"
const UseCaseThree=(props)=>{
    const [count,setCount]=useState(0)
    const [id,setId]=useState()
  /*  useEffect(
        ()=>{
            console.log("all implementation")
        },[props.validity,id]
    )*/
    useEffect(
    ()=>{
        console.log('implementattion 1')
    },[props.validity])

    useEffect(
        ()=>{
            console.log('implementation 2')
        },[]
    )
    useEffect(
        ()=>{
            console.log("implementation 3")
          /*  return ()=>{
                console.log('cleanup')
            }*/
        },[id]
       
    )
    const increment=()=>{
        setCount(count+1)
    }
    const handleId=()=>{
        setId(456)
    }
    return(
        <div>
            {console.log("render")}
            <h1>{props.msg} {props.validity}</h1>
            <h3>{count}</h3>
            <h4>{id}</h4>
            <button onClick={increment}>+</button>
            <br></br>
            <button onClick={handleId}>set id</button>
        </div>
    )
}
export default UseCaseThree