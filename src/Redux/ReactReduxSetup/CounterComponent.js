function CounterComponent(props){
    return(
        <div>
            <button onClick={props.plus}>+</button>
            {props.count}
            <button onClick={props.minus}>-</button>
        </div>
    )
}
export default CounterComponent