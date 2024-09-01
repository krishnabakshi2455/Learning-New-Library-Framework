"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/redux-store/store'; // Import RootState and AppDispatch types
// RootState: This type represents the overall state shape of your Redux store.It’s used to type the state parameter in useSelector.
// AppDispatch: This type represents the dispatch function for your Redux store, ensuring type safety when dispatching actions.
const App: React.FC = () => {
    // React.FC: TypeScript’s React.FC(or React.FunctionComponent) is a type for functional components.It implicitly provides type checking for children and allows you to define prop types.
    const dispatch = useDispatch<AppDispatch>();

    // useDispatch<AppDispatch>(): Types the dispatch function according to AppDispatch, ensuring actions are dispatched with correct types.
    // useSelector((state: RootState) => state...): Types the state parameter to RootState so that TypeScript can infer the correct types for state properties.


    // Use the `RootState` type to properly type the `useSelector` hook
    const ALLCountries = useSelector((state: RootState) => state.Country_Slice.Country_Lists);
    const loading = useSelector((state: RootState) => state.Country_Slice.loading);
    const error = useSelector((state: RootState) => state.Country_Slice.error);
    // const ALLNEWS = useSelector((state: RootState) => state.NEWS_SLICE.ALL_NEWS);

    // Debugging purposes
    console.log('THIS is Countries data', ALLCountries);

    useEffect(() => {
        // Dispatch actions
        dispatch({ type: 'Country_SAGA/FetchCountries' });
        // dispatch({ type: 'NEWS_SAGA/FetchNEWS' });
        // Ensures that the actions are dispatched when the component mounts.
    }, [dispatch]);

    return (
        <>
            <div>
                hello
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ul>
                    {ALLCountries.map((country: any) => (
                        <li key={country.cca3}>
                            {country.name.common}
                            <img src={country.flags.png} alt={country.name.common} />
                        </li>
                    ))}
                </ul>
            </div>
            {/*
            <li key={country.cca3}>: Ensure each li element has a unique key. The key should be a unique identifier.
<img src={country.flags.png} alt={country.name.common} />: Sets the alt attribute of the img tag to improve accessibility and ensure better image handling.
            */}
        </>
    );
};

export default App;
