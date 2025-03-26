import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../slices/productSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state)=>state.product.cart) || []
    const count = cart.length;
    
    const [totalAmount, setTotalAmount] = useState()

    useEffect(()=>{
        if(count === 0){
            let total = 0
            setTotalAmount(total.toFixed(2));
        }
        if(count) {
            let total = 0
            cart.forEach(product => total += product.quantity * product.price)
            setTotalAmount(total.toFixed(2));
        }
    },[cart])

  return (
    <div className='justify-center'>    
        {
            cart.map((product)=>(
                <div className='mt-10 flex flex-row items-center' key={product.id}>
                    <div className=''>
                        <img className='w-20 h-20' src={product.image} alt="" />
                        <button onClick={()=>dispatch(removeProduct(product.id))} className='bg-red-700 text-white rounded-md px-2 py-1'>REMOVE</button>
                    </div>
                    <div>
                        <p>{product.title}</p>
                        <div>
                            <button onClick={() => dispatch(decreaseQuantity(product.id))} className='bg-blue-500 ml-2 mr-1 px-2 py-1 '>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(product.id))} className='bg-yellow-500 ml-2 mr-1 px-2 py-1 '>+</button>
                        </div>
                        <p>{(product.quantity*product.price).toFixed(2)} $</p>
                    </div>
                </div>
            ))
        }
        <div>
            <p className='mt-10 bg-violet-600/50 px-2 py-1 text-xl w-fit rounded'>Total Items - {count}</p>
            <p className='mt-10 bg-red-600/50 px-2 py-1 text-xl w-fit rounded'>Total Amount - {totalAmount} $</p>
        </div>
    </div>
  )
}

export default Cart