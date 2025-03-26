import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../slices/productSlice.js'

export const store = configureStore({
    reducer:{
        product:productReducer
    }
})