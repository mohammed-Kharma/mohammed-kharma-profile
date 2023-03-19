import { createSlice } from "@reduxjs/toolkit"

let ContactScile = createSlice({
    name:"contact-us",
    initialState:{data:[],filterData:[],item:{}},
    reducers:{
        create(state,action){
            state.data = [action.payload , ...state.data];
            state.filterData = state.data;
        },
        read(state,action){
            state.data = action.payload;
            state.filterData = state.data;
        },
        delete(state,action){
            let result = state.data.filter((element)=> element._id != action.payload._id);
            state.data = result;
            state.filterData = state.data;
        },
        showDetelis(state,action){
            state.item = state.data.find((element)=> element._id == action.payload);
        }
    }
});

export const ReducerContact = ContactScile.reducer;
export const ActionContact = ContactScile.actions;