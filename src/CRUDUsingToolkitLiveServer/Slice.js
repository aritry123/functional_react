import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers=createAsyncThunk('/CRUDUsingToolkitLiveServer/fetchUsers',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/empDetails')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const postUsers=createAsyncThunk('/CRUDUsingToolkitLiveServer/postUsers',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/empDetails',obj)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const deleteUsers=createAsyncThunk('/CRUDUsingToolkitLiveServer/deleteUsers',async (userid)=>{
    try{
        await axios.delete(`http://localhost:3001/empDetails/${userid}`)
        return userid
    }
    catch(err){
        console.log(err)
    }
})
export const updateUsers=createAsyncThunk('/CRUDUsingToolkitLiveServer/updateUsers',async (obj)=>{
    try{
        await axios.patch(`http://localhost:3001/empDetails/${obj.id}`,{fname:obj.fname,email:obj.email,phone:obj.phone,address:obj.address})
        return {id:obj.id,fname:obj.fname,email:obj.email,phone:obj.phone,address:obj.address}
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    usersData:[],
    loading:true
}
const Slice=createSlice({
    name:'userinfo',
    initialState:{
        value:initialValue
    },
    reducers:{
        
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
        },
        [postUsers.pending]:(state,action)=>{
            state.value.loading=true
        },
        [postUsers.fulfilled]:(state,action)=>{
            state.value.loading=false
            state.value.usersData=[...state.value.usersData,{id:Date.now(),...action.payload}]
        },
        [postUsers.rejected]:(state,action)=>{
            state.value.loading=false
        },
        [deleteUsers.pending]:(state,action)=>{
            state.value.loading=true
        },
        [deleteUsers.fulfilled]:(state,action)=>{
            state.value.loading=false
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload)
        },
        [deleteUsers.rejected]:(state,action)=>{
            state.value.loading=false
        },
        [updateUsers.pending]:(state,action)=>{
            state.value.loading=true
        },
        [updateUsers.fulfilled]:(state,action)=>{
            state.value.loading=false
            const result=state.value.usersData.find((item)=>item.id===action.payload.id)
            if(result) {
                result.fname=action.payload.fname
                result.email=action.payload.email
                result.phone=action.payload.phone
                result.address=action.payload.address
            }
        },
        [updateUsers.rejected]:(state,action)=>{
            state.value.loading=false
        }
    }
})
export default Slice.reducer