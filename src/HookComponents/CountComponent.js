import { DoCount } from "../CustomHooks/CountHook";
const CountComponent=()=>{
    const {value,increment,decrement} = DoCount()
    return(
        <div>
            <h1>Count: {value}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default CountComponent