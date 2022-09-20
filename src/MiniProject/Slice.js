import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials=true
export const postUsers=createAsyncThunk('/MiniProject/postUsers',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3002/signup',obj)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const signinUsers=createAsyncThunk('/MiniProject/signinUsers',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3002/signin',obj)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const updateUsers=createAsyncThunk('/MiniProject/updateUsers',async (obj)=>{
    try{
        await axios.post(`http://localhost:3002/updatePassword/${obj.id}`,{password:obj.password})
    }
    catch(err){
        console.log(err)
    }
})
export const get=createAsyncThunk('/AssessmentFour/get',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/get')
        return result.data.data
    }
    catch(err){
        console.log(err)
    }
})
export const getCourses=createAsyncThunk('/AssessmentFour/getCourses',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/empDetails')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const getCourseList=createAsyncThunk('/AssessmentFour/getCourseList',async (id)=>{
    try{
        const result=await axios.get(`http://localhost:3002/getCourseList/${id}`)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const postCourses=createAsyncThunk('/AssessmentFour/postCourses',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateCourseList/${obj.id}`,{data:obj.item},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const removeCourses=createAsyncThunk('/AssessmentFour/removeCourses',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/deleteItem/${obj.id}`,{id:obj.itemid},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const getFavList=createAsyncThunk('/AssessmentFour/getFavList',async (id)=>{
    try{
        const result=await axios.get(`http://localhost:3002/getFavList/${id}`)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const postFav=createAsyncThunk('/AssessmentFour/postFav',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateFavList/${obj.id}`,{data:obj.item},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const removeFav=createAsyncThunk('/AssessmentFour/removeFav',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/deleteFav/${obj.id}`,{id:obj.itemid},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const signoutUsers=createAsyncThunk('/MiniProject/signoutUsers',async ()=>{
    try{
        const result=await axios.post('http://localhost:3002/signout',{},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    users:[],
    loading:true,
    userRole:'',
    courseDetails:[],
    loadCourses:true,
    myCourses:[],
    userid:'',
    favCourses:[]
}
const Slice=createSlice({
    name:"info",
    initialState:{
        data:initialValue
    },
    reducers:{
        changeRole:(state,action)=>{
            state.data.userRole=''
        },
        setuserid:(state,action)=>{
            state.data.userid=action.payload
        }
    },
    extraReducers:{
        [signinUsers.pending]:(state,action)=>{

        },
        [signinUsers.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert(action.payload.msg)
            else {
                state.data.userRole=action.payload.role
            }
        },
        [signinUsers.rejected]:(state,action)=>{

        },
        [get.pending]:(state,action)=>{
            state.data.loading=true
        },
        [get.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.users=action.payload
        },
        [get.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [getCourses.pending]:(state,action)=>{
            state.data.loadCourses=true
        },
        [getCourses.fulfilled]:(state,action)=>{
            state.data.loadCourses=false
            state.data.courseDetails=action.payload
        },
        [getCourses.rejected]:(state,action)=>{
            state.data.loadCourses=true
        },
        [getCourseList.pending]:(state,action)=>{
            
        },
        [getCourseList.fulfilled]:(state,action)=>{
            state.data.myCourses=action.payload.courseList
        },
        [getCourseList.rejected]:(state,action)=>{
            
        },
        [getFavList.pending]:(state,action)=>{
            
        },
        [getFavList.fulfilled]:(state,action)=>{
            state.data.favCourses=action.payload.favList
        },
        [getFavList.rejected]:(state,action)=>{
            
        }
    }
})
export const {changeRole,setuserid}=Slice.actions
export default Slice.reducer