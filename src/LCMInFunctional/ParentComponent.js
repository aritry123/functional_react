import UseCaseOne from "./UseCaseOne"
import UseCaseTwo from "./UseCaseTwo"
import UseCaseThree from "./UseCaseThree"

const ParentComponent=(props)=>{
    return(
        <div>
            {/* <UseCaseOne msg='Child Component'></UseCaseOne> */}
            {/* <UseCaseTwo msg='Child Component'></UseCaseTwo> */}
            <UseCaseThree msg='Child Component' validity='1 hour'></UseCaseThree>
        </div>
    )
}
export default ParentComponent