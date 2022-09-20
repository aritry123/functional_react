import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const login=createAsyncThunk('/CRUDUsingMongoDB/login',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/signin',{email:obj.useremail,password:obj.userpassword})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const add=createAsyncThunk('/CRUDUsingMongoDB/add',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/create',{fname:obj.fname,phone:obj.phone,address:obj.address},{
            headers:{
                authorization:'Bearer '+obj.token
            }
        })
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const get=createAsyncThunk('/CRUDUsingMongoDB/get',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/get')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const remove=createAsyncThunk('/CRUDUsingMongoDB/remove',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3001/delete/${obj.id}`,{},{
            headers:{
                authorization:'Bearer '+obj.token
            }
        })
        return {data:result.data,id:obj.id}
    }
    catch(err){
        console.log(err)
    }
})
export const update=createAsyncThunk('/CRUDUsingMongoDB/update',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3001/update/${obj.id}`,{
            fname:obj.fname,
            phone:obj.phone,
            address:obj.address
        },{
            headers:{
                authorization:'Bearer '+obj.token
            }
        })
        return {obj:obj,data:result.data}
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    token:'',
    status:false,
    details:[],
    loading:true
}
const Slice=createSlice({
    name:'info',
    initialState:{
        data:initialValue
    },
    reducers:{
        logout:(state,action)=>{
            state.data.token=''
            state.data.status=false
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
        [add.pending]:(state,action)=>{
            
        },
        [add.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                state.data.loading=false
                state.data.details.push(action.payload.data)
                console.log(action.payload.data)
                // return alert("Contact created!")
            }
        },
        [add.rejected]:(state,action)=>{
            
        },
        [get.pending]:(state,action)=>{
            state.data.loading=true
        },
        [get.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                console.log(action.payload)
                state.data.loading=false
                state.data.details=action.payload.data
            }
        },
        [get.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [remove.pending]:(state,action)=>{
            state.data.loading=true
        },
        [remove.fulfilled]:(state,action)=>{
            console.log(action.payload.data)
            if(!action.payload.data.status) return alert("Unauthorized!")
            else {
                console.log(action.payload)
                state.data.loading=false
                state.data.details=state.data.details.filter((item)=>item._id!==action.payload.id)
                // return alert("contact deleted successfully!")
            }
        },
        [remove.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [update.pending]:(state,action)=>{
            console.log("pending")
            state.data.loading=true
        },
        [update.fulfilled]:(state,action)=>{
            console.log("fulfilled")
            console.log(action.payload.data)
            if(!action.payload.data.status) return alert("Unauthorized!")
            else {
                console.log(action.payload)
                state.data.loading=false
                const result=state.data.details.find((item)=>item._id===action.payload.obj.id)
                result.Fname=action.payload.obj.fname
                result.Phone=action.payload.obj.phone
                result.Address=action.payload.obj.address
            }
        },
        [update.rejected]:(state,action)=>{
            console.log("rejected")
            state.data.loading=true
        }
    }
})
export const {logout}=Slice.actions
export default Slice.reducer