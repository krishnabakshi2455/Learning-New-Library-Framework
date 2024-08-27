import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // https://restcountries.com/v3.1/all
  const dispatch = useDispatch();
  const countries = useSelector(state => state.Country_SLice.CountryList);
  const loading = useSelector(state => state.Country_SLice.loading);
  const error = useSelector(state => state.Country_SLice.error);

  console.log(countries);
  
  useEffect(() => {
    dispatch({ type: 'Country_SAGA/FetchCountries' });
  }, [dispatch]);
  return (
   <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {countries.map((country, index) => (
            <>
              <li key={country.cca3}>{country.name.common}</li>
              <img src={country.flags.png} alt="" key={index} />
            </>
          ))}
        </ul>
      </div>
   
   
   </>
  )
}

export default App
