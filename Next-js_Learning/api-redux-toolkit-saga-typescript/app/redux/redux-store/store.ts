import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { call, all, AllEffect, ForkEffect,CallEffect } from 'redux-saga/effects';
import countriesSlice from "../redux-countries/countriesSlice";
import { WatchFetchCountrySaga } from "../redux-countries/countriesSaga";


// Create the Saga middleware
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
// sagaMiddleware: Explicitly typed as SagaMiddleware to clarify that it is an instance of the saga middleware.


// Define the root saga with proper type annotations
function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
    // rootSaga: Typed as Generator<AllEffect<ForkEffect<void>>> to describe the generator function used by redux - saga.AllEffect and ForkEffect are types provided by redux - saga to describe the all effect and call effect respectively.
    // The generator function rootSaga is typed to ensure that it returns the correct types for redux - saga's effects. This helps prevent any runtime errors due to incorrect saga usage.
    // The call effect is used within the all effect to invoke the saga functions(WatchFetchCountrySaga and WatchFetchNewsSaga).This makes sure that the sagas are properly called and the types are correctly inferred.
    yield all([
        call(WatchFetchCountrySaga),
        // call(WatchFetchNewsSaga)
    ]);
}

// Configure the Redux store
const store: EnhancedStore = configureStore({
    // Typed as EnhancedStore to specify that this is a Redux store with some additional capabilities provided by the middleware and devTools.
    reducer: {
        Country_Slice:countriesSlice
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    // The middleware array is properly typed by using the getDefaultMiddleware function and concatenating the sagaMiddleware.
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
// The store object is exported as the default export, just like in the original JavaScript code, but now with TypeScript type safety.
