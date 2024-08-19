import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:'RandomUsers',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchUserStart(state){
            state.loading=true;
        },
        fetchUserSuccess(state,action){
            state.loading=false;
            state.users=action.payload;
        },
        fetchUserFailure(state,action){
            state.loading=false;
            state.error=action.payload;
        },

    },

});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userslice.actions;
export default userslice.reducer;