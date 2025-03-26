import React from 'react'
import Shop from './Shop'
import Cart from './Cart'

const Main = () => {
  return (
    <div className='flex flex-row'>
        <div className='w-[50%]'>
            <Shop/>
        </div>
        <div className='w-[50%]'>
        <h1 className='mt-10 mb-20'>CART PRODUCTS</h1>
            <Cart/>
        </div>
    </div>
  )
}

export default Main