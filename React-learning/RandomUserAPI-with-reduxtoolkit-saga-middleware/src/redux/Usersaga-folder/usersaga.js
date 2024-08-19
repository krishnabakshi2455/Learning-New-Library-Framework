import { call,put,takeEvery } from "redux-saga/effects";
import { fetchUserStart,fetchUserSuccess,fetchUserFailure } from "../randomuserSlice-folder/userslice";

function* fetchUsersSaga(){
    try{
        yield put(fetchUserStart())
        const response = yield call(fetch,'https://randomuser.me/api/');
        const data =  yield response.json();
        yield put(fetchUserSuccess(data.results))
        // console.log(data);
        
        
    }catch(error){
        yield put(fetchUserFailure(error))
    }
}
export function* watchFetchUsers(){
    yield takeEvery('FETCH_USER_START', fetchUsersSaga)
}