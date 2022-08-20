import React from "react"
const ChildForm=React.forwardRef((props,ref)=>{
    const [fnameRef,passwordRef]=ref
    return(
        <div>
            <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}}>
                <input type='text' placeholder="Username" ref={fnameRef}></input>
                <input type='text' placeholder="Password" ref={passwordRef}></input>
            </form>
        </div>
    )
})
export default ChildForm