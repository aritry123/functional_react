import { useState } from "react";
import ThemeContextfn from "./ThemeContextfn";
import Themefn from "./Themefn";
const ThemeProviderfn=()=>{
    const [color,setColor]=useState('')
    const handleClick=(e)=>{
        if(e==='dark') setColor('black')
        if(e==='light') setColor('white')
    }
    return(
        <div>
            <ThemeContextfn.Provider value={{color:color,handleClick:handleClick}}>
                <Themefn></Themefn>
            </ThemeContextfn.Provider>
        </div>
    )
}
export default ThemeProviderfn