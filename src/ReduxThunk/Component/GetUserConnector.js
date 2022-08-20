import { connect } from "react-redux"
import { getUserData } from "../Store/Actions/UserAction"
import GetUserComponent from './GetUserComponent'
import { postUserData } from "../Store/Actions/UserAction"
import { deleteUserData } from "../Store/Actions/UserAction"
import { updateUserData } from "../Store/Actions/UserAction"
const mapStateToProps=(state)=>{
    return{
        users:state.users,
        isLoading:state.loading
    }
}
export default connect(mapStateToProps,{getUserData,postUserData,deleteUserData,updateUserData})(GetUserComponent)