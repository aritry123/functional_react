import { createContext } from "react";
const ClassCounterContext=createContext({counter:null,increment:()=>{},decrement:()=>{}})
export default ClassCounterContext