import { useState, useEffect } from "react";
import Response from "./Response";
// import ResponseTwo from "./ResponseTwo";
import {useNavigate} from 'react-router-dom'
import TableData from "./TableData";
const Sort=(props)=>{
    // const result=JSON.parse(Response.list)
    const navigate=useNavigate()
    const [val,setVal]=useState('Leaderboard')
    const [res,setRes]=useState(Response.list)
    const [uname,setUname]=useState(false)
    const [age,setAge]=useState(false)
    const [rank,setRank]=useState(false)
    const [score,setScore]=useState(false)
    // const [lead,setLead]=useState(true)
    const handleName=(e)=>{
        navigate(`/${e}`)
    }
    useEffect(()=>{
        console.log("useeffect",props.id)
        // if(props.id===0) {
        //     setUname(false)
        //     setAge(false)
        //     setRank(false)
        //     setScore(false)
        //     setLead(true)
        //     setVal('Leaderboard')
        //     setRes(Response.list)
        // }
        if(props.id===1) {
            setUname(true)
            setAge(false)
            setRank(false)
            setScore(false)
            // setLead(false)
            setVal('Sorted according to Name')
            setRes(res.sort((a,b)=>a.name.localeCompare(b.name)))
        }
        if(props.id===2) {
            setUname(false)
            setAge(true)
            setRank(false)
            setScore(false)
            // setLead(false)
            setVal('Sorted according to Age')
            setRes(res.sort((a,b)=>Number(a.age)-Number(b.age)))
        }
        if(props.id===3) {
            setUname(false)
            setAge(false)
            setRank(true)
            setScore(false)
            // setLead(false)
            setVal('Sorted according to Rank')
            setRes(res.sort((a,b)=>Number(a.rank)-Number(b.rank)))
        }
        if(props.id===4) {
            setUname(false)
            setAge(false)
            setRank(false)
            setScore(true)
            // setLead(false)
            setVal('Sorted according to Score')
            setRes(res.sort((a,b)=>Number(a.points)-Number(b.points)))
        }
    },[props.id])
    return(
        <div className="bgColor">
            {console.log("render",res)}
        <div>
            {/* <button style={{margin: '10px'}} className={lead?"btn btn-success":"btn btn-outline-success"} onClick={(e)=>handleName('')}>Leaderboard</button> */}
            <button style={{margin: '10px'}} className="btn btn-outline-success" onClick={(e)=>handleName('')}>Leaderboard</button>
            <button style={{margin: '10px'}} className={uname?"btn btn-success":"btn btn-outline-success"} onClick={(e)=>handleName('name')}>Name</button>
            <button style={{margin: '10px'}} className={age?"btn btn-success":"btn btn-outline-success"} onClick={(e)=>handleName('age')}>Age</button>
            <button style={{margin: '10px'}} className={rank?"btn btn-success":"btn btn-outline-success"} onClick={(e)=>handleName('rank')}>Rank</button>
            <button style={{margin: '10px'}} className={score?"btn btn-success":"btn btn-outline-success"} onClick={(e)=>handleName('score')}>Score</button>
        </div>
        <h2 style={{textAlign: 'center'}}>{val}</h2>
        <TableData tableData={res}></TableData>
        </div>
    )
}
export default Sort