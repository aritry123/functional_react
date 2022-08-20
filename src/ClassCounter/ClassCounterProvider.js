import React from 'react';
import ClassCounterContext from './ClassCounterContext';
import { ClassCounterMain } from './ClassCounterMain';
export class ClassCounterProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        if(this.state.count>0) this.setState({count:this.state.count-1})
    }
    render() {
        return(
            <div>
                <ClassCounterContext.Provider value={{counter:this.state.count,increment:this.increment,decrement:this.decrement}}>
                    <ClassCounterMain></ClassCounterMain>
                </ClassCounterContext.Provider>
            </div>
        )
    }
}