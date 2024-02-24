// const { createSlice } = require("@reduxjs/toolkit")
// // const { act } = require("react-dom/test-utils")

// const initialState = []

// const cartSlice = createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         add(state,action){
//             state.push(action.payload)
//         },
//         remove(state,action){
//             state = state.filter((item)=>item.id!==action.payload)
//         },
//     }
// })

// console.log(cartSlice.actions);

// export const {add,remove}=cartSlice.actions
// export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

console.log(cartSlice.actions);

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
