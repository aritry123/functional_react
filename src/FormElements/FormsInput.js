import { useState } from "react";
import { CustomHook } from "./CustomHook";
import { CustomHookTwo } from "./CustomHookTwo";
function FormsInput(){
    const [selectedValue,setValue]=useState('Choose')
    // const [selectedCheckOne,setCheckOne]=useState(false)
    // const [selectedCheckTwo,setCheckTwo]=useState(false)
    // const [selectedCheckThree,setCheckThree]=useState(false)
    // const [attending,setAttending]=useState('')
    const {selectedCheckOne,selectedCheckTwo,selectedCheckThree,...otherEvents}=CustomHook()
    const {selectedOption,...others}=CustomHookTwo()
    const handleChange=(e)=>{
        // console.log(e.nativeEvent.target[1].text)
        setValue(e.target.value)
    }
    const handleCheck=()=>{
        setValue('Choose')
        if(selectedValue==='Python') return alert("You are not allowed to take this course!")
    }
    // const handleCheckBox=(e)=>{
    //     console.log(e)
    //     // setCheck(!selectedCheck)
    //     // setAttending(e.target.name)
    //     if(e.target.name==='attending'){
    //         setCheckOne(true)
    //         setCheckTwo(false)
    //         setCheckThree(false)
    //         setAttending(e.target.name)
    //     }
    //     if(e.target.name==='may be attending'){
    //         setCheckOne(false)
    //         setCheckTwo(true)
    //         setCheckThree(false)
    //         setAttending(e.target.name)
    //     }
    //     if(e.target.name==='not attending'){
    //         setCheckOne(false)
    //         setCheckTwo(false)
    //         setCheckThree(true)
    //         setAttending(e.target.name)
    //     }
    // }
    // const handleClear=()=>{
    //     setCheckOne(false)
    //     setCheckTwo(false)
    //     setCheckThree(false)
    //     setAttending('')
    // }
    return(
        <div>
            <select onChange={(e)=>handleChange(e)} onClick={handleCheck}>
                <option value='C'>C</option>
                <option value='HTML'>HTML</option>
                <option value='Python'>Python</option>
                <option value='React'>React</option>
            </select>
            {/* <h1>{selectedValue}</h1> */}
            <br/>
            {/* Are you attending the workshop? Yes <input type='checkbox' checked={selectedCheckOne} onChange={(e)=>handleCheckBox(e)} name='attending'></input>
           Maybe <input type='checkbox' checked={selectedCheckTwo} onChange={(e)=>handleCheckBox(e)} name='may be attending'></input>
           No <input type='checkbox' checked={selectedCheckThree} onChange={(e)=>handleCheckBox(e)} name='not attending'></input>
           <button onClick={handleClear}>Clear</button> */}
           <>
           Are you attending the workshop? Yes <input type='checkbox' checked={selectedCheckOne} {...otherEvents} name='attending'></input>
           Maybe <input type='checkbox' checked={selectedCheckTwo} {...otherEvents} name='may be attending'></input>
           No <input type='checkbox' checked={selectedCheckThree} {...otherEvents} name='not attending'></input>
           <button {...otherEvents}>Clear</button>
           </>
           <>
           <div>
                <input type="radio" value="Male" name="gender" checked={selectedOption==='Male'} {...others}/> Male
                <input type="radio" value="Female" name="gender" checked={selectedOption==='Female'} {...others}/> Female
                <input type="radio" value="Other" name="gender" checked={selectedOption==='Other'} {...others}/> Other
                <button {...others}>Clear</button>
           </div>
           </>
        </div>
    )
}
export default FormsInput