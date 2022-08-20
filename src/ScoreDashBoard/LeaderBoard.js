import { useState, useEffect } from "react";
// import ResponseTwo from "./ResponseTwo";
import ResponseThree from "./ResponseThree";
import {useNavigate} from 'react-router-dom'
import TableData from "./TableData";
const LeaderBoard=(props)=>{
    const navigate=useNavigate()
    const [res,setRes]=useState(ResponseThree.list)
    const handleName=(e)=>{
        navigate(`/${e}`)
    }
    return(
        <div className="bgColor">
            {console.log("render",res)}
        <div>
            <button style={{margin: '10px'}} className="btn btn-success" onClick={(e)=>handleName('')}>Leaderboard</button>
            <button style={{margin: '10px'}} className="btn btn-outline-success" onClick={(e)=>handleName('name')}>Name</button>
            <button style={{margin: '10px'}} className="btn btn-outline-success" onClick={(e)=>handleName('age')}>Age</button>
            <button style={{margin: '10px'}} className="btn btn-outline-success" onClick={(e)=>handleName('rank')}>Rank</button>
            <button style={{margin: '10px'}} className="btn btn-outline-success" onClick={(e)=>handleName('score')}>Score</button>
        </div>
        <h2 style={{textAlign: 'center'}}>Leaderboard</h2>
        <TableData tableData={res}></TableData>
        </div>
    )
}
export default LeaderBoard