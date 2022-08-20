import { decrement, increment } from "../Actions"
import { connect } from "react-redux"
import CounterComponent from "./CounterComponent"
const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}
const mapDisptachToProps=(dispatch)=>{
    return{
        plus:()=>dispatch(increment()),
        minus:()=>dispatch(decrement())
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(CounterComponent)