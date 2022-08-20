import { useContext } from "react"
import ThemeContextfn from "./ThemeContextfn"
const Themefn=()=>{
    const {color,handleClick}=useContext(ThemeContextfn)
    return(
            <div style={{backgroundColor: `${color}`,padding: '300px',display: 'flex',justifyContent: 'center'}}>
            <button onClick={(e)=>handleClick('dark')}>Dark</button>
            <button onClick={(e)=>handleClick('light')}>Light</button>
        </div>
    )
}
export default Themefn