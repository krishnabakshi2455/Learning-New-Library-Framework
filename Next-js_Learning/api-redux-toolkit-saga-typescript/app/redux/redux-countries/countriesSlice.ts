import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state
interface CountryState {
    Country_Lists: any[];  // Assuming Country_Lists is an array of any
    loading: boolean;
    error: string | null;
}

// Define the initial state using the CountryState interface
const initialState: CountryState = {
    Country_Lists: [],
    loading: false,
    error: null,
};

// Create the slice using TypeScript
const countrySlice = createSlice({
    name: 'Country_Slice',
    initialState,
    reducers: {
        GET_COUNTRY_REQUEST(state) {
            state.loading = true;
        },
        GET_COUNTRY_SUCCESS(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.Country_Lists = action.payload;
        },
        GET_COUNTRY_FAILURE(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Export the action creators and reducer
export const { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } = countrySlice.actions;
export default countrySlice.reducer;
