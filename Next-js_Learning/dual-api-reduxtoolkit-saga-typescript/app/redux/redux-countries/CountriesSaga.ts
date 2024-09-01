import { call, put, takeEvery } from "redux-saga/effects";
import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "./CountriesSlice";




function* FetchCountrySaga():Generator<any,void,any>{
    try {
        yield put(GET_COUNTRY_REQUEST())
        const response:Response = yield call(fetch,'https://restcountries.com/v3.1/all')
        const data:any[] = yield response.json()
        yield put(GET_COUNTRY_SUCCESS(data))
    } catch (error) {
        const errormessage = error instanceof Error?error.message:"AN UNKOWN ERROR OUCCERED"
        yield put(GET_COUNTRY_FAILURE(errormessage))
    }

}

export function* WatchFetchCountrySaga():Generator<any,void>{
    yield takeEvery('NEWS_SAGA/FetchNewsSaga',FetchCountrySaga)
}