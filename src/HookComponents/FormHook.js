import { UseInput } from "../CustomHooks/UseInput";
const FormHook=()=>{
    const {value,err,...otherEvents} = UseInput()
    return(
        <form>
            {console.log(value,err)}
            <input type='text' placeholder="Username" style={{margin: '10px'}} {...otherEvents}></input>
            <input type='text' placeholder="Password" style={{margin: '10px'}} {...otherEvents}></input>
            {
                err&&<h3>{err}</h3>
            }
        </form>
    )
}
export default FormHook