const { put, call, takeEvery } = require("redux-saga/effects");
const { GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE } = require("./countrySlice");



function* FetchCountrySaga(){
    try {
        yield put(GET_COUNTRY_REQUEST())
        const response = yield call(fetch,'https://restcountries.com/v3.1/all')
        const data = yield response.json()
        yield put(GET_COUNTRY_SUCCESS(data))
    } catch (error) {
        yield put(GET_COUNTRY_FAILURE(error.toString()))
    }
}

export function* WatchFetchCountrySaga(){
    yield takeEvery('Country_SAGA/FetchCountries',FetchCountrySaga)
}