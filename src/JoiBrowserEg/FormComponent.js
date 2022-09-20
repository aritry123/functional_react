import Joi from 'joi-browser'
import {useState} from 'react'
function FormComponentJoi(){
const [data,setData]=useState({
    username:'',
    password:'',
    email:''
})
const [errors,setErrors]=useState({ 
username:'',
password:'',
email:''
})

const schema={
    username:Joi.string().required(),
    password:Joi.string().required(),
    email:Joi.string().email().required()
}

const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    const errorDetails=validateSchema(e)
    console.log(errorDetails)
    let temp={...errors}
    if(errorDetails){
        temp[name]=errorDetails
    }
    else{
        delete temp[name]
    }
    let tempData={...data}
    tempData[name]=value
    setData(tempData)
    setErrors(temp)
}
const validateSchema=(e)=>{

const name=e.target.name
const value=e.target.value
const obj={[name]:value}
const schemaObj={[name]:schema[name]}
const result=Joi.validate(obj,schemaObj)
console.log(result)
if(result.error){
    console.log('inside if')
    return result.error.details[0].message
}
else{
    console.log('inside else')
    return null
}
}
const handleSubmit=(e)=>{
    e.preventDefault()

}
return(
    <div>
        {console.log(errors,data)}
        Username:<input type='text'
        name='username'
        onBlur={(e)=>handleChange(e)}></input>
        <p>{errors.username}</p>
        Password:<input type='text'
        name='password'
         onBlur={(e)=>handleChange(e)}></input>
          <p>{errors.password}</p>
        Email:<input type='email'
        name='email'
         onBlur={(e)=>handleChange(e)}></input>
          <p>{errors.email}</p>
        <button onClick={e=>handleSubmit(e)}>signup</button>
    </div>
)

}
export default FormComponentJoi;