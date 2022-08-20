import { createSlice } from "@reduxjs/toolkit";
const initialValue={email:'dummy',designation:'admin',username:'dummy'}
const userSlice=createSlice({
    name:'userinfo',
    initialState:{
        state:initialValue
    },
    reducers:{
        login:(state,action)=>{
            state.state=action.payload
        },
        logout:(state)=>{
            state.state=initialValue
        }
    }
})
export const {login,logout}=userSlice.actions
export default userSlice.reducer