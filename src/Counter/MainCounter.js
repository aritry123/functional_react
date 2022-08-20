import CounterContext from "./CounterContext"
import { useContext } from "react"
const MainCounter=()=>{
    const {counter,increment,decrement}=useContext(CounterContext)
    return(
        <div>
            {counter}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default MainCounter