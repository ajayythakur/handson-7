import { createSlice } from "@reduxjs/toolkit";

export const studentSlice=createSlice({
    name:'student',
    initialState:
        [{
                name: 'Ajay',
                age: '22',
                course: 'Full Stack',
                batch: 'EA18',
              }],
    reducers:{
        stdEdit:(state,action)=>{
            state[action.payload.location]=action.payload.tmpObj;
            return (state)
        },
        stdAdd:(state,action)=>{
            console.log(action.payload);
            console.log(state);
            state.push(action.payload)
            return (state)
        }
    }
});

export const {stdEdit,stdAdd }=studentSlice.actions
export default studentSlice.reducer