import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

let SkllisScile = createSlice({
    name:"skllis-scile",
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
        searchData(state,action){
            if(action.payload !=""){
                let result = state.data.filter((element)=> element.name.includes(action.payload));
                state.filterData = result;
            }
            else{
                state.filterData = state.data;
            }
        },
        showDetelis(state,action){
            state.item = state.data.find((element)=> element._id == action.payload);
        },
        updateData(state,action){
            state.item = action.payload;
        },

    }
});

export const ReducerSkllis = SkllisScile.reducer;
export const ActionSkllis = SkllisScile.actions;