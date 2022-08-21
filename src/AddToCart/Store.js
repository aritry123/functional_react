import { configureStore } from "@reduxjs/toolkit"
import Slice from "./Slice"
const Store=configureStore({
    reducer:{
        productsinfo:Slice
    }
})
export default Store