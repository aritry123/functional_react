const reducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            if(state.count>0) return {count:state.count-1}
            else return {count:state.count}
        default:
            return {count:state.count}
    }
}
export default reducer

// const reducer=(count=0,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return count+1
//         case 'DECREMENT':
//             if(count>0) return count-1
//             else return count
//         default:
//             return count
//     }
// }
// export default reducer