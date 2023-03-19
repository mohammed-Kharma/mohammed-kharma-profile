import { createSlice } from "@reduxjs/toolkit"

let HomeScile = createSlice({
    name:"home-scile",
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
        }
    }
});

export const ReducerHome = HomeScile.reducer;
export const ActionHome = HomeScile.actions;