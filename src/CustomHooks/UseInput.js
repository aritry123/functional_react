import { useState } from "react";
export const UseInput=()=>{
    const [value,setValue]=useState('')
    const [err,setErr]=useState('')
    return {
        value,
        err,
        onBlur:(e)=>{
            if(!e.target.value) setErr('This is a required field!')
        },
        onChange:(e)=>setValue(e.target.value)
    }
}