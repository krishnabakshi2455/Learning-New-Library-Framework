import { call, put,takeEvery } from "redux-saga/effects";
import { GET_NEWS_FAILURE, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "./newsSlice";



function* FetchNewsSaga(){
   try {
       yield put(GET_NEWS_REQUEST())
       const response = yield call(fetch, 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b9adbcad183b41b1b448fe64e4e98a02')
       const data = yield response.json()
       yield put(GET_NEWS_SUCCESS(data))
   } catch (error) {
        yield put(GET_NEWS_FAILURE(error.toString()))
   }
}

export function* WatchFetchNewsSaga(){
    yield takeEvery('NEWS_SAGA/FetchNews', FetchNewsSaga)
}