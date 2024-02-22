import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../redux/slices/counter'

export const store = configureStore({
    reducer:{
        counter : counterSlice
    },
})