import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE } from '@/app/redux/redux-countries/countriesSlice';

// Define the type for the error object
interface FetchCountryError {
    message: string;
}

// Saga function to fetch countries
function* FetchCountrySaga(): Generator<any, void, any> {
    // Generator<any, void, any>: This is the standard way to type a generator function in TypeScript.
    // The first any represents the type of value yielded from the generator function.
    // void indicates that the generator doesn’t return a value when it completes.
    // The last any represents the type of value passed into the generator function (when calling yield).
    try {
        yield put(GET_COUNTRY_REQUEST()); // Dispatch GET_COUNTRY_REQUEST action
        const response: Response = yield call(fetch, 'https://restcountries.com/v3.1/all'); // Fetch data
        const data: any[] = yield response.json(); // Parse JSON response
        yield put(GET_COUNTRY_SUCCESS(data)); // Dispatch GET_COUNTRY_SUCCESS action with fetched data
    } catch (error) {
        // Ensure error is a string or has a message property
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(GET_COUNTRY_FAILURE(errorMessage)); // Dispatch GET_COUNTRY_FAILURE action with error message
    }
}

// Watcher saga to listen for the FETCH_COUNTRY_REQUEST action
export function* WatchFetchCountrySaga(): Generator<any, void, any> {
    // Generator<any, void, any>: Use this type for your saga functions to indicate that they are generator functions, which are a fundamental part of Redux - Saga.
    yield takeEvery('Country_SAGA/FetchCountries', FetchCountrySaga); // Listen for 'Country_SAGA/FetchCountries' action and run FetchCountrySaga
}
