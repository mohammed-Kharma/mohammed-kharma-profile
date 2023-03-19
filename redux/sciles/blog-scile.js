import { createSlice } from "@reduxjs/toolkit"

let BlogScile = createSlice({
    name:"work-scile",
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
        }
    }
});

export const ReducerBlog = BlogScile.reducer;
export const ActionBlog = BlogScile.actions;