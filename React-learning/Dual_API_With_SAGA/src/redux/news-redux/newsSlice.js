import { createSlice } from "@reduxjs/toolkit";



const newsSLice = createSlice({
    name: 'NEWS_SLICE',
    initialState: {
        ALL_NEWS: [],
        loading: false,
        error: null
    },
    reducers: {
        GET_NEWS_REQUEST(state) {
            state.loading = true;
        },
        GET_NEWS_SUCCESS(state, action) {
            state.loading = false;
            state.ALL_NEWS = action.payload;
        },
        GET_NEWS_FAILURE(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { GET_NEWS_SUCCESS, GET_NEWS_REQUEST, GET_NEWS_FAILURE } = newsSLice.actions
export default newsSLice.reducer;