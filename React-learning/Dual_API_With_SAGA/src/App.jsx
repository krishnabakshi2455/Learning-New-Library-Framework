import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // https://restcountries.com/v3.1/all
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=b9adbcad183b41b1b448fe64e4e98a02
  const dispatch = useDispatch();
  const countries = useSelector(state => state.Country_SLice.CountryList);
  const loading = useSelector(state => state.Country_SLice.loading);
  const error = useSelector(state => state.Country_SLice.error);


  const ALLNEWS = useSelector(state => state.NEWS_SLICE.ALL_NEWS)
  console.log('this is News Data', ALLNEWS);
  


  // console.log(countries);

  useEffect(() => {
    dispatch({ type: 'Country_SAGA/FetchCountries' });

    dispatch({ type: 'NEWS_SAGA/FetchNews' })
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
