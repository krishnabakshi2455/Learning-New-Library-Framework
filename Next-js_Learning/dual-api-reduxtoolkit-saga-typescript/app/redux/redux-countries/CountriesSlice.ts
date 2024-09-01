import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface CountryState{
    Country_LISTS:any[],
    loading:boolean,
    error: string | null
}

const InitialState:CountryState={
    Country_LISTS:[],
    loading:false,
    error: null
}

const CountriesSlice = createSlice({
    name: 'Countrie_SLICE',
    initialState:InitialState,
    reducers:{
        GET_COUNTRY_REQUEST(state){
            state.loading=true
        },
        GET_COUNTRY_SUCCESS(state,action:PayloadAction<any[]>){
            state.loading=false
            state.Country_LISTS=action.payload
        },
        GET_COUNTRY_FAILURE(state,action:PayloadAction<string>){
            state.loading=false
            state.error=action.payload
        }
    }
  
})

export const { GET_COUNTRY_FAILURE,GET_COUNTRY_REQUEST,GET_COUNTRY_SUCCESS} = CountriesSlice.actions;
export default CountriesSlice.reducer;