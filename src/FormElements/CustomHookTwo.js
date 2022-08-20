import { useState } from "react";
export const CustomHookTwo=()=>{
    const [selectedOption,setSelectedOption]=useState('')
    return {
        selectedOption,
        onChange:(e)=>{
            setSelectedOption(e.target.value)
        },
        onClick:()=>{
            setSelectedOption('')
        }
    }
}