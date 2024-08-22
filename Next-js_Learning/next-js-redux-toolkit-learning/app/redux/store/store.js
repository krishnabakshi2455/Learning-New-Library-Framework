import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slice/Slice'


export const store=()=>{
    return configureStore({
        reducer:{
            counter:counterSlice
        }
    })
}
//  const store = () => {
//     return configureStore({
//         reducer: {
//             counter: counterSlice
//         }
//     })
// }