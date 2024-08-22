// "use client"

// import React from 'react'
// import { Provider } from 'react-redux' 
// import store from '@/app/redux/store/store'

// const StoreProvider = ({children}) => {
//   return (<Provider store={store}>{children}</Provider>
//   )
// }

// export default StoreProvider
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
// import { makeStore } from '../lib/store'
import { store } from './store'

export default function StoreProvider({ children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = store()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}