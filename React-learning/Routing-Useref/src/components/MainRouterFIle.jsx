import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './Home'
import Page2 from './Page2'
import Page3 from './Page3'
import Header from './Header';


const MainRouterFIle = () => {




  return (
    <>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />

        </Routes>
     


    </>
  )
}

export default MainRouterFIle
