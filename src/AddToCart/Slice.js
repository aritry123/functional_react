import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialValue={
    productsData:[],
    elecProductsData:[],
    clothProductsData:[],
    cartProductsData:[],
    searchedProductsData:[],
    sLoad:true,
    loading:true,
    mar:true,
    cartLoad:true
}
const Slice=createSlice({
    name:'productsinfo',
    initialState:{
        data:initialValue
    },
    reducers:{
        homeData:(state,action)=>{
            state.data.productsData=[...state.data.productsData,...action.payload]
            state.data.loading=false
        },
        setMar:(state,action)=>{
            state.data.mar=action.payload
        },
        elecData:(state,action)=>{
            state.data.elecProductsData=[...state.data.elecProductsData,...action.payload]
        },
        clothData:(state,action)=>{
            state.data.clothProductsData=[...state.data.clothProductsData,...action.payload]
        },
        cartData:(state,action)=>{
            state.data.cartLoad=false
            const res=state.data.productsData.find((item)=>item.id===action.payload.id)
            res.quantity=res.quantity+1
            if(state.data.cartProductsData.length>0) {
                if(state.data.cartProductsData.find((item)=>item.id===action.payload.id?true:false)) {
                    state.data.cartProductsData.find((item)=>item.id===action.payload.id).quantity=res.quantity
                } else {
                    state.data.cartProductsData=[...state.data.cartProductsData,res]
                }
            } else {
                state.data.cartProductsData=[...state.data.cartProductsData,res]
            }
        },
        searchData:(state,action)=>{
            state.data.sLoad=false
            const res=state.data.productsData.filter((item)=>item.pName===action.payload)
            state.data.searchedProductsData=res
        },
        delCartData:(state,action)=>{
            const res=state.data.productsData.find((item)=>item.id===action.payload.id)
            res.quantity=res.quantity-1
            if(state.data.cartProductsData.find((item)=>item.id===action.payload.id).quantity>1) {
                state.data.cartProductsData.find((item)=>item.id===action.payload.id).quantity=res.quantity
            } else {
                state.data.cartProductsData=state.data.cartProductsData.filter((item)=>item.id!==action.payload.id)
                if(state.data.cartProductsData.length===0) {
                    state.data.cartLoad=true
                }
            }
        }
    }
})
export const {homeData,setMar,elecData,clothData,cartData,searchData,delCartData}=Slice.actions
export default Slice.reducer