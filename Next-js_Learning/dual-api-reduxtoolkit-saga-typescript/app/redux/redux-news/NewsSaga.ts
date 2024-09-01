import { call, put, takeEvery } from "redux-saga/effects";
import { GET_NEWS_FAILURE, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "./NewsSlice";




function* FetchNewsSaga(): Generator<any, void, any> {
    try {
        yield put(GET_NEWS_REQUEST())
        const response: Response = yield call(fetch, ' https://newsapi.org/v2/top-headlines?country=us&apiKey=b9adbcad183b41b1b448fe64e4e98a02')
        const data: any[] = yield response.json()
        yield put(GET_NEWS_SUCCESS(data))
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message:"AN UNKOWN ERROR OCCURED"
        yield put(GET_NEWS_FAILURE(errorMessage))
    }
}

export function* WatchFetchNewsSaga():Generator<any,void>{
    yield takeEvery('NEWS_SAGA/FetchNews_Saga',FetchNewsSaga)
}