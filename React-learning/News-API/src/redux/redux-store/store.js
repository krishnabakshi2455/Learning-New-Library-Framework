import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import NewsSlice from '../redux-news-folder/NewsSlice';
import { WatchFetchNews } from '../redux-news-folder/NewsSaga';


const SagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer: {
        NEWS_SLICES:NewsSlice,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(SagaMiddleWare),
    devTools:true
})
SagaMiddleWare.run(WatchFetchNews)

export default store

