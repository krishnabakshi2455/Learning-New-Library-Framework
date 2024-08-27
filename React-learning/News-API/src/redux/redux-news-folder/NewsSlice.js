import { createSlice } from "@reduxjs/toolkit";




const NewsSlice = createSlice({
    name: 'NEWS_SLICES',
    initialState: {
        News_Array: [],
        loading: false,
        error: null
    },
    reducers: {
        GET_NEWS_REQUEST(state) {
            state.loading = true;
        },
        GET_NEWS(state, action) {
            state.News_Array = action.payload;
            state.loading = false;
        },
        GET_NEWS_ERROR(state, action) {
            state.error = action.payload;
        }
    }
})

export const { GET_NEWS, GET_NEWS_REQUEST, GET_NEWS_ERROR } = NewsSlice.actions

export default NewsSlice.reducer