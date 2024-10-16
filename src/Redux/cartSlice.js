import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addTask:(state, action)=>{
            state.push(action.payload);
        },
        removeTask:(state, action)=>{
            return state.filter(task=> task.id!== action.payload);
        },
        updateTask:(state,action)=>{
            const index = state.findIndex(task=>task.id === action.payload.id);
            if(index!== -1){
                state[index]=action.payload;
            }
        }
    }
})
export const {addTask, removeTask, updateTask}=cartSlice.actions;
export default cartSlice.reducer;