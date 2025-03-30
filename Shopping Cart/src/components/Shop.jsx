import axios from 'axios'
import React,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addProductToCart , setProducts } from '../slices/productSlice.js'

const Shop = () => {

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.product.products)

    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div className=''>
        {products.map((product)=>(
            <div className='flex flex-row mt-10 items-center ml-10' key={product.id}>
                <img className='w-20 h-20' src={product.image} alt="" />
                <div className='ml-10 p-3'>
                    <div>
                        <p>{product.description.slice(0,20)}</p>
                        <p>{product.title}</p>
                        <p>{(product.price).toFixed()} $</p>
                    </div>
                    <button className='bg-green-600/70 px-2 py-1 rounded-lg hover:bg-green-600' onClick={()=>dispatch(addProductToCart({
                        id:product.id,
                        title:product.title,
                        price:product.price,
                        image:product.image,
                    }))}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Shop