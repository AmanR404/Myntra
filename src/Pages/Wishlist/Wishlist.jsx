import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { removeWishlistProduct } from '../../Setup/Redux/State/action'
import { removeProductCountFromWishlist } from '../../Setup/Redux/State/action'
import { storeProducts } from '../../Setup/Redux/State/action'

const Wishlist = () => {
    // Data from Redux Store
    const wishlistProducts = useSelector((state => state.productToWishlist))
    const products = useSelector((state => state.productsData))

    const dispatch = useDispatch()

    // Fetching Wishlist Products
      useEffect(() => {
        dispatch(storeProducts())
    }, [])

    // Function to Remove Product from Wishlist
    const removeProductFromWishlist = (productId) => {
        dispatch(removeWishlistProduct(productId))
        dispatch(removeProductCountFromWishlist())
    }

    return (
        <section className='mt-10 min-h-[70vh] flex flex-col px-10 lg:px-40 gap-4 mb-30'>
            <div className='mb-2 text-center'>
                <span className='text-gray-800 font-bold text-lg'>Wishlist Products</span>
            </div>
            <div className='w-[90vw] pt-2 flex flex-wrap gap-6'>
                {/* Products in Cart */}
                {products.map((product) => {
                    if (wishlistProducts.includes(product.id)) {
                        return (
                            <div key={product.id} className='flex gap-4 border border-gray-200 w-[500px]'>
                                <img className='w-[140px] h-[180px] object-contain' src={product.image} alt="" />
                                <div className='flex flex-col w-full pr-5'>
                                    <span className='text-gray-800 font-bold text-sm'>{product.title}</span>
                                    <span className='text-gray-700 text-sm mb-1'>{product.description.trim().split(/\s+/).slice(0, 5).join(' ')}</span>
                                    <span className='text-gray-500 text-xs mb-5'>Sold by : RetailNet</span>
                                    <div className='flex justify-between items-center'>
                                        <span className='font-bold text-gray-900 bg-gray-200 py-0.5 px-1 w-[45px] rounded-sm text-sm mb-6'>Qty:1</span>
                                        <button onClick={() => { removeProductFromWishlist(product.id) }} className='text-[#ff3e6c] font-semibold text-lg cursor-pointer'>X</button>
                                    </div>
                                    <span className='text-gray-800 font-bold text-sm mb-2'>{product.price.toFixed(2)}</span>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-[15px] h-[15px]' src="https://static.vecteezy.com/system/resources/previews/000/589/654/non_2x/vector-back-icon.jpg" alt="" />
                                        <span className='text-xs'><b> 14 days</b> return available</span>
                                    </div>
                                </div>
                            </div>)
                    }
                })}
            </div>
        </section>
    )
}

export default Wishlist