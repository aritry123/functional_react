import React from "react";
import ClassCounterContext from "./ClassCounterContext"
import { useContext } from "react"
export class ClassCounterMain extends React.Component {
    static contextType=ClassCounterContext
    render() {
        return(
            <div>
                {this.context.counter}
                <button onClick={this.context.increment}>+</button>
                <button onClick={this.context.decrement}>-</button>
            </div>
        )
    }
}