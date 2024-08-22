import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    BrowserRouter,
    Routes,
    NavLink,
} from "react-router-dom";
import Home from './Home'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5';
import Page6 from './Page6';
const Header = () => {

    const page5ref = useRef(null)
    
    const page6ref = useRef(null)
    const pagebtnref5 = useRef()
    const pagebtnref6 = useRef()
    const scrollpage = (pageref,buttonref) => {
        pageref.current.scrollIntoView({ behavior: 'smooth' })

        if (pagebtnref5.current) pagebtnref5.current.style.backgroundColor = pagebtnref5 === buttonref ? 'blue' : 'yellow';
        if (pagebtnref6.current) pagebtnref6.current.style.backgroundColor = pagebtnref6 === buttonref ? 'blue' : 'yellow';       
    }



    return (
        <>
            <div className=' border-zinc-950 border-2 p-4 m-4 flex justify-between bg-black'>
                <NavLink className={(e) => { return e.isActive ? "bg-blue-800 text-white p-2" : "bg-yellow-400 text-white p-2" }} to="/">Home</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-blue-800 text-white p-2" : "bg-yellow-400 text-white p-2" }} to="Page2">Page2</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-blue-800 text-white p-2" : "bg-yellow-400 text-white p-2" }} to="Page3">Page3</NavLink>
                <button ref={pagebtnref5} className='bg-yellow-400 text-white p-2' onClick={() => scrollpage(page5ref,pagebtnref5)}>Page5scrollbtn</button>
                <button ref={pagebtnref6} className='bg-yellow-400 text-white p-2' onClick={() => scrollpage(page6ref, pagebtnref6)}>Page6scrollbtn</button>
                
            </div>

            <Page4 />

            <div ref={page5ref}>
                <Page5 />
            </div>

            <div ref={page6ref}>
                <Page6 />
            </div>

        </>
    )
}

export default Header