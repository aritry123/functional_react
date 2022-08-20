import { useState } from "react";
export const UseHook=()=>{
    const [data,setData]=useState('New Data')
    return {
        data
    }
}