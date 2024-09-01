"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/redux-store/store'

const UImain = () => {

  const dispatch = useDispatch<AppDispatch>()

  const ALLNEWS = useSelector((state: RootState) => state.News_Slice.ALL_News)
  console.log('this is news data',ALLNEWS);
  const CountriesLists = useSelector((state: RootState) => state.Countrie_SLICE.Country_LISTS)
  const loading = useSelector((state: RootState) => state.Countrie_SLICE.loading)
  const error = useSelector((state: RootState) => state.Countrie_SLICE.error)
  console.log('this is country data',CountriesLists);


  useEffect(() => {
    dispatch({ type: 'NEWS_SAGA/FetchNews_Saga' });
    dispatch({ type: 'NEWS_SAGA/FetchNewsSaga' })
  }, [dispatch])


  return (
    <>
      <div>
        hello
        {loading ? <p>Loading........................................................................................................</p>:""}
        {error && <p>Error: {error}</p>}
        <ul>
          {CountriesLists.map((country: any) => (
            <li>
              {country.name.common}
              <img src={country.flags.png} alt={country.name.common} />
            </li>
          ))}
        </ul>
      </div>



    </>
  )
}

export default UImain
