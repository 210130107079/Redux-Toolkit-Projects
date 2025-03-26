import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[],
    cart:[]
}

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload
        },
        addProductToCart:(state,action)=>{  
            const productInCart = state.cart.find(item => item.id === action.payload.id)
            if(productInCart){
                productInCart.quantity += 1
            }else{
                state.cart.push({...action.payload, quantity:1 })
            }
        },
        increaseQuantity:(state,action)=>{
            const product = state.cart.find(item => item.id === action.payload)
            product.quantity += 1
        },
        decreaseQuantity:(state,action)=>{
            const product = state.cart.find(item => item.id === action.payload)
            if(product && product.quantity > 1 ){
                product.quantity -= 1
            }else{
                state.cart = state.cart.filter(item => item.id!== action.payload)
            }
        },
        removeProduct:(state,action)=>{
            state.cart = state.cart.filter(item => item.id!== action.payload)
        },
    }
})

export const { addProductToCart , setProducts ,increaseQuantity , decreaseQuantity , removeProduct } = productsSlice.actions
export default productsSlice.reducer