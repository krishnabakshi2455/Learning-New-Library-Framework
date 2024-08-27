import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { WatchFetchCountriesSAGA } from '../country-redux/countrysaga'
import countryslice from '../country-redux/countryslice'
import { all } from 'redux-saga/effects'




const SagaMiddleWare = createSagaMiddleware()

function* rootSaga() {
    yield all([
        WatchFetchCountriesSAGA(),
        // WatchFetchNewsSAGA(), // Add other sagas here
    ])
}
const store = configureStore({
    reducer: {
        Country_SLice:countryslice
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SagaMiddleWare),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NewsSagaMiddleWare),
})
SagaMiddleWare.run(rootSaga)
export default store;