import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCartProduct } from '../../Setup/Redux/State/action'
import { removeProductCountFromCart } from '../../Setup/Redux/State/action'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {
    const dispatch = useDispatch()

    // Data from Redux Store
    const cartProducts = useSelector((state => state.productToCart))
    const products = useSelector((state => state.productsData))
    let totalPrice = 0

    // Function to Remove Product from Cart
    const removeProductFromCart = (productId) => {
        dispatch(removeCartProduct(productId))
        dispatch(removeProductCountFromCart())
    }

    // Place Order Function
    const placeOrder = () => {
        toast.success(`Payment Partner doesn't exist !`, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
            })
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className='mt-10 min-h-[70vh] flex flex-col md:flex-row justify-between px-10 lg:px-40 gap-4 mb-30'>
                {/* Left Side */}
                <div className='w-[90vw] lg:w-[700px] pt-2 flex flex-col gap-6'>
                    <div className='flex justify-between mb-2'>
                        <span className='text-gray-800 font-bold text-sm'>Items Selected</span>
                        <span className='text-gray-700 text-sm font-semibold hidden sm:inline-block'>Remove</span>
                        <span className='border-l-1 border-gray-400 pl-10 text-gray-700 text-sm font-semibold'>Move to Wishlist</span>
                    </div>
                    {/* Products in Cart */}
                    {products.map((product) => {
                        if (cartProducts.includes(product.id)) {
                            totalPrice += product.price
                            return (
                                <div key={product.id} className='flex gap-4 border border-gray-200'>
                                    <img className='w-[140px] h-[180px] object-contain' src={product.image} alt="" />
                                    <div className='flex flex-col w-full pr-5'>
                                        <span className='text-gray-800 font-bold text-sm'>{product.title}</span>
                                        <span className='text-gray-700 text-sm mb-1'>{product.description.trim().split(/\s+/).slice(0, 5).join(' ')}</span>
                                        <span className='text-gray-500 text-xs mb-5'>Sold by : RetailNet</span>
                                        <div className='flex justify-between items-center'>
                                            <span className='font-bold text-gray-900 bg-gray-200 py-0.5 px-1 w-[45px] rounded-sm text-sm mb-6'>Qty:1</span>
                                            <button onClick={() => { removeProductFromCart(product.id) }} className='text-[#ff3e6c] font-semibold text-lg cursor-pointer'>X</button>
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
                {/* Right Side */}
                <div className='w-[90vw] lg:w-[400px] flex flex-col gap-2 p-2 pt-14 border border-gray-200'>
                    <span className='text-gray-700 text-sm font-semibold mb-2'>Price Details</span>
                    <div className='flex justify-between'><span className='text-gray-700 text-sm'>Total MRP</span><span className='text-gray-700 text-sm'>{totalPrice.toFixed(2)}</span></div>
                    <div className='flex justify-between'><span className='text-gray-700 text-sm'>Coupon Discount</span><button className='text-[#ff3e6c] cursor-pointer'>Apply coupon</button></div>
                    <div className='flex justify-between mb-1'>
                        <div className='flex gap-1'><span className='text-gray-700 text-sm'>Platform Fee</span><span className='text-[#ff3e6c] font-bold text-sm'>Know More</span></div>
                        <span className='text-gray-700 text-sm'>20</span>
                    </div>
                    <div className='flex justify-between border-b-1 border-gray-200 pb-4'>
                        <div className='flex gap-1'><span className='text-gray-700 text-sm'>Shipping Fee</span><span className='text-[#ff3e6c] font-bold text-sm'>Know More</span></div>
                        <span>FREE</span>
                    </div>
                    <div className='flex justify-between text-gray-800 font-bold text-sm mb-1'>
                        <span>Total Amount</span><span>{totalPrice == 0 ? 0 : totalPrice + 20}</span>
                    </div>
                    <button onClick={()=>{placeOrder()}} className='bg-[#ff3e6c] hover:bg-[#da2852] cursor-pointer text-white font-bold rounded-sm py-2'>PLACE ORDER</button>
                </div>
            </section>
        </>
    )
}

export default Cart