const { configureStore } = require("@reduxjs/toolkit");
import createSagaMiddleware from 'redux-saga'
import { call,all } from 'redux-saga/effects';
import countrySlice from '../redux-country-folder/countrySlice';
import { WatchFetchCountrySaga } from '../redux-country-folder/countrySaga';
import { WatchFetchNewsSaga } from '../redux-news-folder/newsSaga';
import newsSlice from '../redux-news-folder/newsSlice';
const SagaMiddleWare = createSagaMiddleware()

function* rootSaga (){
    yield all([
        WatchFetchCountrySaga(),
        WatchFetchNewsSaga()
    ])
}
const store = configureStore({
    reducer: {
        Country_Slice:countrySlice,
        NEWS_SLICE:newsSlice
    },
    devTools:true,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(SagaMiddleWare),
})
SagaMiddleWare.run(rootSaga)
export default store