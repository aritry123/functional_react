import { useState } from "react";
export const DoCount=()=>{
    const [value,setValue]=useState(0)
    return{
        value,
        increment:()=>{
            setValue(value+1)
        },
        decrement:()=>{
            if(value>0) setValue(value-1)
        }
    }
}