import React from 'react';
import ThemeContext from './ThemeContext';
import { Theme } from './Theme';
export class ThemeProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            color:''
        }
    }
    handleClick=(e)=>{
        if(e==='dark') this.setState({color:'black'})
        if(e==='light') this.setState({color:'white'})
    }
    render() {
        return(
            <div>
                <ThemeContext.Provider value={{color:this.state.color,handleClick:this.handleClick}}>
                    <Theme></Theme>
                </ThemeContext.Provider>
            </div>
        )
    }
}