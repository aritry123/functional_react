import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers=createAsyncThunk('/CRUDUsingToolkit/fetchUsers',async ()=>{
    try{
        const result=await axios.get('https://jsonplaceholder.typicode.com/users')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    usersData:[],
    loading:true
}
const userSlice=createSlice({
    name:'userinfo',
    initialState:{
        value:initialValue
    },
    reducers:{
        addUser:(state,action)=>{
            state.value.usersData.push(action.payload)
        },
        removeUser:(state,action)=>{
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload.userid)
            // state.value.usersData.pop(state.value.usersData.find((item)=>item.id===action.payload.userid))
            // const result=state.value.usersData.find((item)=>item.id==action.payload.userid)
            // console.log(result)
        },
        updateUser:(state,action)=>{
            const result=state.value.usersData.find((item)=>item.id==action.payload.userid)
            // here we used == bcz the id values are same but the types are different (string & number)
            if(result) result.email=action.payload.newemail
        }
    },
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            state.value.loading=true
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.value.loading=false
            state.value.usersData=[...state.value.usersData,...action.payload]
        },
        [fetchUsers.rejected]:(state,action)=>{
            state.value.loading=false
        }
    }
})
export const {addUser,removeUser,updateUser}=userSlice.actions
export default userSlice.reducer