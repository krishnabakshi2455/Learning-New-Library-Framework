import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { WatchFetchCountriesSAGA } from '../country-redux/countrysaga'
import countryslice from '../country-redux/countryslice'
import { all } from 'redux-saga/effects'
import { WatchFetchNewsSaga } from '../news-redux/newsSaga'
import newsSlice from '../news-redux/newsSlice'

const SagaMiddleWare = createSagaMiddleware()

function* rootSaga() {
    yield all([
        WatchFetchCountriesSAGA(),
        WatchFetchNewsSaga()
    ])
}
const store = configureStore({
    reducer: {
        Country_SLice:countryslice,
        NEWS_SLICE:newsSlice
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SagaMiddleWare),
})
SagaMiddleWare.run(rootSaga)
export default store;