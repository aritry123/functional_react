import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const login=createAsyncThunk('/RTK_jwt_Tokens/login',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/signin',{email:obj.useremail,password:obj.userpassword})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const update=createAsyncThunk('/RTK_jwt_Tokens/update',async (token)=>{
    try{
        const result=await axios.post('http://localhost:3001/update',{},{
            headers:{
                authorization:'Bearer '+token
            }
        })
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    token:'',
    status:false
}
const Slice=createSlice({
    name:'info',
    initialState:{
        data:initialValue
    },
    reducers:{
        logout:(state,action)=>{
            state.data.token=''
            // action.payload('/')
            console.log("this is",state.data.token)
        }
    },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.data.status=false
        },
        [login.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                state.data.status=true
                state.data.token=action.payload.accesstoken
            }
        },
        [login.rejected]:(state,action)=>{
            state.data.status=false
        },
        [update.pending]:(state,action)=>{
            
        },
        [update.fulfilled]:(state,action)=>{
            console.log(action.payload.msg)
        },
        [update.rejected]:(state,action)=>{

        }
    }
})
export const {logout}=Slice.actions
export default Slice.reducer