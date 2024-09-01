import createSagaMiddleware from "@redux-saga/core";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import type { SagaMiddleware } from 'redux-saga';
import { all, AllEffect, call, CallEffect, ForkEffect } from "redux-saga/effects";
import NewsSlice from "../redux-news/NewsSlice";
import { WatchFetchNewsSaga } from "../redux-news/NewsSaga";
import { WatchFetchCountrySaga } from "../redux-countries/CountriesSaga";
import CountriesSlice from "../redux-countries/CountriesSlice";
// This tells TypeScript that the imported item should only be used for type annotations and not as a value in the generated JavaScript code.





const SagaMiddleware:SagaMiddleware=createSagaMiddleware()

function* rootSaga():Generator<AllEffect<CallEffect<void>>,void,unknown>{
    yield all([
        call(WatchFetchNewsSaga),
        call(WatchFetchCountrySaga)
    ])
} 

const store:EnhancedStore=configureStore({
    reducer:{
        News_Slice:NewsSlice,
        Countrie_SLICE:CountriesSlice
    },
    devTools:true,
    middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(SagaMiddleware)
})
SagaMiddleware.run(rootSaga)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch