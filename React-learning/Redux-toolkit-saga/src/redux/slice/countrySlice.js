import { createSlice } from '@reduxjs/toolkit';
// 1. Setting Up Redux Toolkit
// Redux Toolkit simplifies state management by providing a structured way to define slices of state.
const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countries: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchCountriesStart(state) {
            state.loading = true;
        },
        fetchCountriesSuccess(state, action) {
            state.loading = false;
            state.countries = action.payload;
        },
        fetchCountriesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCountriesStart,
    fetchCountriesSuccess,
    fetchCountriesFailure,
} = countrySlice.actions;

export default countrySlice.reducer;

// This code defines a slice of state with actions to handle starting a fetch, successfully receiving data, and handling errors.