import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 4. Triggering the Saga
// In your component, dispatch the action to start the saga and display the data:
const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.country.countries);
  const loading = useSelector(state => state.country.loading);
  const error = useSelector(state => state.country.error);

  useEffect(() => {
    dispatch({ type: 'country/fetchCountries' });
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {countries.map((country,index) => (
          <>
          <li key={country.cca3}>{country.name.common}</li>
            <img src={country.flags.png} alt="" key={index}/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
// This component uses the useSelector hook to access the state and map through the countries array to display each country's name.

// Summary:
// Redux Toolkit: Simplifies creating slices of state.
// Redux Saga: Manages side effects like API calls.
//   Example: Fetch and display country data from the restcountries.com API.
// The final output will be a list of country names fetched from the API and displayed in your component.