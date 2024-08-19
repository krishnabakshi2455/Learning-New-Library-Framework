import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { watchFetchUsers } from "../Usersaga-folder/usersaga";
import userslice from "../randomuserSlice-folder/userslice";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        RandomUsers: userslice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools:true

})
sagaMiddleware.run(watchFetchUsers)
export default store;