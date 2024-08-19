import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const ALLUsers = useSelector(state => state.RandomUsers.users)
  console.log(ALLUsers);
  const loading = useSelector(state => state.RandomUsers.loading);
  const error = useSelector(state => state.RandomUsers.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_START' });
  }, [dispatch]);

  return (
    <>
      <div>
        {ALLUsers && ALLUsers.length > 0 ? (
          ALLUsers.map((user, index) => (
            <div key={index}>
              <h1>{user.name.first}</h1>
              <h1>{user.name.last}</h1>
              <h1>{user.name.title}</h1>
              <h1>{user.gender}</h1>
            </div>
          ))
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
    </>
  )
}

export default App
