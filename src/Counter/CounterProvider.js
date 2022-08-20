import { useState } from "react";
import CounterContext from "./CounterContext";
import MainCounter from "./MainCounter";
const CounterProvider=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0) setCount(count-1)
    }
    return(
        <div>
            <CounterContext.Provider value={{counter:count,increment:increment,decrement:decrement}}>
                <MainCounter></MainCounter>
            </CounterContext.Provider>
        </div>
    )
}
export default CounterProvider