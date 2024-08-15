import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import countryReducer from '../slice/countrySlice';
import { watchFetchCountries } from '../saga/sagas';

const sagaMiddleware = createSagaMiddleware();
// 3. Configuring the Store
// Add saga middleware to your Redux store:
const store = configureStore({
    reducer: {
        country: countryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchCountries);

export default store;
