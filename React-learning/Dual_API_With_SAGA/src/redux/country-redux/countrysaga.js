import { put, takeEvery,call } from "redux-saga/effects";
import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "./countryslice";




function* FetchCountrySaga() {
    try {
        yield put(GET_COUNTRY_REQUEST());
        const response = yield call(fetch, 'https://restcountries.com/v3.1/all');
        const data = yield response.json();
        yield put(GET_COUNTRY_SUCCESS(data))
    } catch (error) {
        yield put(GET_COUNTRY_FAILURE(error.toString()))
    }
}

export function* WatchFetchCountriesSAGA(){
    yield takeEvery('Country_SAGA/FetchCountries', FetchCountrySaga)
}