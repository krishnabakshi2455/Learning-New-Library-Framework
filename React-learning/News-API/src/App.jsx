import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const ALLNEWS = useSelector(state => state.NEWS_SLICES.News_Array);
  // const loading = useSelector(state => state.NEWS_SLICES.loading);
  // const error = useSelector(state => state.NEWS_SLICES.error);
  console.log(ALLNEWS);
  
  useEffect(() => {
    dispatch({ type: 'News/FetchNews' });
  }, [dispatch]);

  return (
    <>
      <div className='bg-green-600'>
        krishna
      </div>
    </>
  )
}

export default App
