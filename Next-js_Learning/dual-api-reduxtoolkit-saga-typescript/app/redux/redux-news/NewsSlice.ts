import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface NewsState {
    ALL_News: any[],
    loading: boolean,
    error: string | null
}

const initialState: NewsState = {
    ALL_News: [],
    loading: true,
    error: null
}

const NewsSlice = createSlice({
    name: 'News_Slice',
    initialState,
    reducers: {
        GET_NEWS_REQUEST(state) {
            state.loading = true
        },
        GET_NEWS_SUCCESS(state, action: PayloadAction<any[]>) {
            state.loading = false
            state.ALL_News = action.payload
        },
        GET_NEWS_FAILURE(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }

    }
});


export const { GET_NEWS_SUCCESS, GET_NEWS_REQUEST, GET_NEWS_FAILURE } = NewsSlice.actions
export default NewsSlice.reducer;