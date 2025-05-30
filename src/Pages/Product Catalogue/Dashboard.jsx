import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeProducts } from '../../Setup/Redux/State/action'
import { addToCartProducts } from '../../Setup/Redux/State/action'
import { productCountInCart } from '../../Setup/Redux/State/action'
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

    // Authentication
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    // Data from Redux Store
    const products = useSelector((state => state.productsData))
    const category = useSelector((state => state.category))
    const searchText = useSelector((state => state.searchByInput))

    const dispatch = useDispatch()

    // Regex Patterns
    const regex = new RegExp(`^${category}`, 'i')
    const inputRegex = new RegExp(searchText, "i")

    // Fetching Products from API
    const fetchProducts = async () => {
        let response = await fetch('https://fakestoreapi.com/products')
        let products = await response.json()
        dispatch(storeProducts(products))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // Function to Add Products to Cart
    const addToCart = (productId) => {
        if (isAuthenticated) {
            dispatch(addToCartProducts(productId))
            dispatch(productCountInCart())
        }
        else {
            loginWithRedirect()
        }
    }
    
    return (
        <section className='flex flex-col px-14 pt-4 gap-2'>
            <span className='text-gray-700 text-sm'>Home/ <b>{category && category.charAt(0).toUpperCase() + category.slice(1)}</b></span>
            <span className='text-gray-700'> <b> {category && category.charAt(0).toUpperCase() + category.slice(1)}</b></span>
            {/* Products Catalogue */}
            <div className='flex flex-wrap gap-12 pl-10'>
                {products.map((product) => {
                    if (regex?.test(product.category) || searchText != "" ? inputRegex.test(product.title) : null)
                        return (
                            <div key={product.id} className='w-[210px] h-[340px] mb-4 group cursor-pointer'>
                                <div className='h-[80%] relative'>
                                    <img className='h-full w-full object-contain' src={product.image} alt="" />
                                    <div className='absolute bottom-2 left-3 bg-gray-100 opacity-80 rounded-sm px-2 py-0.5 flex items-center gap-1 group-hover:hidden'>
                                        <span className='text-xs font-semibold'>{product.rating.rate}</span>
                                        <img className='w-[15px] h-[15px]' src="https://static.vecteezy.com/system/resources/thumbnails/000/378/728/small/Basic_Elements__28120_29.jpg" alt="" />
                                    </div>
                                    <button onClick={() => { addToCart(product.id) }} className='absolute bottom-2 left-3 bg-[#ff3e6c] text-white font-bold rounded-sm w-[90%] py-1.5 cursor-pointer hover:bg-[#da2852] hidden group-hover:block'>ADD TO BAG</button>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <span className='font-bold text-gray-800'>{product.title.trim().split(/\s+/).slice(0, 2).join(' ')}</span>
                                    <span className='text-gray-600 text-sm'>{product.description.slice(0, 27)}</span>
                                    <span className='text-sm font-bold text-gray-800'>Rs. {product.price}</span>
                                </div>
                            </div>
                        )
                })}
            </div>
        </section>
    )
}

export default Dashboard

