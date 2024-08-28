import { createSlice } from "@reduxjs/toolkit";


const CountrySLice = createSlice({
    name: "Country_SLice",
    initialState: {
        CountryList: [],
        loading: false,
        error: null,
    },
    reducers: {
        GET_COUNTRY_REQUEST(state) {
            state.loading = true;
        },
        GET_COUNTRY_SUCCESS(state, action) {
            state.loading = false
            state.CountryList = action.payload;
        },
        GET_COUNTRY_FAILURE(state, action) {
            state.loading = false
            state.error = action.payload;
        }
    }
})

export const { GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE } = CountrySLice.actions;

export default CountrySLice.reducer;