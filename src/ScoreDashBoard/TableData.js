import { useState } from 'react'
import './TableData.css'
const TableData=(props)=>{
    const [res,setRes]=useState(props.tableData)
    return(
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Rank</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tableData.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.rank}</td>
                            <td>{item.points}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default TableData