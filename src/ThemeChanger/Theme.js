import React from "react";
import ThemeContext from "./ThemeContext";
export class Theme extends React.Component {
    static contextType=ThemeContext
    render() {
      return (
        <>
        <div style={{backgroundColor: `${this.context.color}`,padding: '300px',display: 'flex',justifyContent: 'center'}}>
            <button onClick={(e)=>this.context.handleClick('dark')}>Dark</button>
            <button onClick={(e)=>this.context.handleClick('light')}>Light</button>
        </div>
        </>
      )
    }
}