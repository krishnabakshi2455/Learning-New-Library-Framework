"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

    const dispatch = useDispatch()
    const ALLCountries = useSelector(state => state.Country_Slice.Country_Lists)
    const loading = useSelector(state=>state.Country_Slice.loading)
    const error = useSelector(state=>state.Country_Slice.error)
    // console.log(ALLCountries);

    const ALLNEWS = useSelector(state => state.NEWS_SLICE.ALL_NEWS)
    console.log('THIS is news data',ALLNEWS);
    
    
    
    useEffect(() => {
        dispatch({ type: 'Country_SAGA/FetchCountries' });

        dispatch({ type: 'NEWS_SAGA/FetchNEWS' })
    }, [dispatch]);
  return (
    <>
          <div>
            hello
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              <ul>
                  {ALLCountries.map((country, index) => (
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
