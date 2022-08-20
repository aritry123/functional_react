import { UseHook } from "../CustomHooks/UseHook";
const HookComp=()=>{
    const {data} = UseHook()
    return(
        <div>
            {console.log('render',data)}
            <h1>{data}</h1>
        </div>
    )
}
export default HookComp