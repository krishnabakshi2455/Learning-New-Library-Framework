"use client"

import store from "../redux-store/store"

const { Provider } = require("react-redux")


export const NextProvider = ({ children })=>{
    return <Provider store={store}>{children}</Provider>
} 