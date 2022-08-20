import React from "react";
export class ClassConsumer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                Class Consumer
                <div>
                    <button onClick={()=>this.props.handleLogout()}>logout</button>
            
                </div>
            </div>
        )
    }
}