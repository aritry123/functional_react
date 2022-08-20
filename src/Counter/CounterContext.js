import { createContext } from "react";
const CounterContext=createContext({counter:null,increment:()=>{},decrement:()=>{}})
export default CounterContext