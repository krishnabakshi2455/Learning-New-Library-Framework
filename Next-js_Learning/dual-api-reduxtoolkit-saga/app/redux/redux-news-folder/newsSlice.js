const { createSlice } = require("@reduxjs/toolkit");


const newsSlice = createSlice({
    name: 'NEWS_SLICE',
    initialState: {
        ALL_NEWS: [],
        loading: false,
        error: null
    },
    reducers: {
        GET_NEWS_REQUESTED(state, action) {
            state.loading = true;
        },
        GET_NEWS_SUCCESS(state, action) {
            state.loading = false;
            state.ALL_NEWS = action.payload;
        },
        GET_NEWS_FAILED(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const { GET_NEWS_FAILED, GET_NEWS_SUCCESS, GET_NEWS_REQUESTED } = newsSlice.actions

export default newsSlice.reducer