import { useState } from "react";
export const CustomHook=()=>{
    const [selectedCheckOne,setCheckOne]=useState(false)
    const [selectedCheckTwo,setCheckTwo]=useState(false)
    const [selectedCheckThree,setCheckThree]=useState(false)
    const [attending,setAttending]=useState('')
    return {
        selectedCheckOne,
        selectedCheckTwo,
        selectedCheckThree,
        onChange:(e)=>{
            if(e.target.name==='attending'){
                setCheckOne(true)
                setCheckTwo(false)
                setCheckThree(false)
                setAttending(e.target.name)
            }
            if(e.target.name==='may be attending'){
                setCheckOne(false)
                setCheckTwo(true)
                setCheckThree(false)
                setAttending(e.target.name)
            }
            if(e.target.name==='not attending'){
                setCheckOne(false)
                setCheckTwo(false)
                setCheckThree(true)
                setAttending(e.target.name)
            }
        },
        onClick:()=>{
            setCheckOne(false)
            setCheckTwo(false)
            setCheckThree(false)
            setAttending('')
        }
    }
}