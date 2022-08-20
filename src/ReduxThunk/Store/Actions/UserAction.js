import axios from "axios";

export const getUserData=()=>async (dispatch)=>{
    try{
        const res=await axios.get('http://localhost:3001/empDetails')
        let data=res.data
        return dispatch(
            {
                type:'GET_USER',
                payload:data
            }
        )
    }
    catch(err){
        console.log(err)
    }
}

export const postUserData=(fname,email,phone,address)=> async (dispatch)=>{
    try{
        await axios.post('http://localhost:3001/empDetails',{
            id:Date.now(),
            fname:fname,
            email:email,
            phone:phone,
            address:address
        })
        try{
            const res=await axios.get('http://localhost:3001/empDetails')
            let data=res.data
            return dispatch(
                {
                    type:'GET_USER',
                    payload:data
                }
            )
        }
        catch(err){
            console.log(err)
        }
    }
    catch(err){
        console.log(err)
    }
}

export const deleteUserData=(itemid)=>async (dispatch)=>{
    try{
        await axios.delete(`http://localhost:3001/empDetails/${itemid}`)
        try{
            const res=await axios.get('http://localhost:3001/empDetails')
            let data=res.data
            return dispatch(
                {
                    type:'GET_USER',
                    payload:data
                }
            )
        }
        catch(err){
            console.log(err)
        }
    }
    catch(err){
        console.log(err)
    }
}

export const updateUserData=(itemid,fname,email,phone,address)=>async (dispatch)=>{
    try{
        await axios.patch(`http://localhost:3001/empDetails/${itemid}`,{
            fname:fname,
            email:email,
            phone:phone,
            address:address
        })
        try{
            const res=await axios.get('http://localhost:3001/empDetails')
            let data=res.data
            return dispatch(
                {
                    type:'GET_USER',
                    payload:data
                }
            )
        }
        catch(err){
            console.log(err)
        }
    }
    catch(err){
        console.log(err)
    }
}