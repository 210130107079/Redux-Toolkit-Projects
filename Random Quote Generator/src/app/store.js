import {configureStore} from '@reduxjs/toolkit'
import quoteReducer from '../slices/quoteSlices.js'

export const store = configureStore({
    reducer:{
        quote:quoteReducer
    }
})