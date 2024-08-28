
const { createSlice } = require("@reduxjs/toolkit")

const countrySlice = createSlice({
    name: 'Country_Slice',
    initialState: {
        Country_Lists: [],
        loading: false,
        error: null
    },
    reducers: {
        GET_COUNTRY_REQUEST(state) {
            state.loading = true
        },
        GET_COUNTRY_SUCCESS(state, action) {
            state.loading = false
            state.Country_Lists = action.payload
        },
        GET_COUNTRY_FAILURE(state, action) {
            state.loading = false
            state.error = action.payload
        }
    },
})

export const { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } = countrySlice.actions
export default countrySlice.reducer