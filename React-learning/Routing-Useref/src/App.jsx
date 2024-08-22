import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainRouterFIle from './components/MainRouterFIle'
import Page4 from './components/Page4'
import Page6 from './components/Page6'
function App() {

  return (
    <>

      <div >
        {/* <Page6/> */}
        <MainRouterFIle />
        <Header/>
       {/* <Page4/> */}
      </div>
    </>
  )
}

export default App
