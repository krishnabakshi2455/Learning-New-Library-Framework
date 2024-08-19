import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCountriesStart, fetchCountriesSuccess, fetchCountriesFailure } from '../slice/countrySlice';

// 2. Setting Up Redux Saga
// Redux Saga is middleware that allows you to handle side effects(like API calls) in a more organized manner.

function* fetchCountriesSaga() {
    try {
        // throw new error("some error")
        yield put(fetchCountriesStart());
        const response = yield call(fetch, 'https://restcountries.com/v3.1/all');
        const data = yield response.json();
        yield put(fetchCountriesSuccess(data));
    } catch (error) {
        yield put(fetchCountriesFailure(error.toString()));
    }
}
// Here, fetchCountriesSaga is a generator function that makes the API call and dispatches the appropriate actions based on success or failure.
export function* watchFetchCountries() {
    yield takeEvery('country/fetchCountries', fetchCountriesSaga);
}
