import { call, put, takeEvery } from "redux-saga/effects";
import { GET_NEWS, GET_NEWS_ERROR, GET_NEWS_REQUEST } from "./NewsSlice";




function* fetchNewsSaga(){
    try {
        yield put(GET_NEWS_REQUEST())
        const response = yield call(fetch,'https://newsapi.org/v2/top-headlines?country=us&apiKey=b9adbcad183b41b1b448fe64e4e98a02')
        const data = yield response.json()
        yield put(GET_NEWS(data))
    } catch (error) {
        put(GET_NEWS_ERROR(error.toString()));
    }
}

export function* WatchFetchNews(){
    yield takeEvery('News/FetchNews',fetchNewsSaga)
}