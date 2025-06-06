import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useRef, useState, useEffect } from 'react';
import { categorySelector } from '../Setup/Redux/State/action';
import { searchByInputText } from '../Setup/Redux/State/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SideNavigation from './SideNavigation';

const Header = () => {
    // States
    const [loginDialog, setLoginDialog] = useState(false)
    const [searchText, setsearchText] = useState("")
    const [sideNavigator, setsideNavigator] = useState(false)

    const productCount = useSelector((state => state.noOfProductsInCart))
    const wishlistCount = useSelector((state => state.noOfProductsInWishlist))

    const dispatch = useDispatch()

    // Authentication
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const navigate = useNavigate()

    // Ref's
    const refMen = useRef()
    const refWomen = useRef()
    const refElectronics = useRef()
    const refJewelery = useRef()


    const isSideNavigationOpen = () => {
        sideNavigator ? setsideNavigator(false) : setsideNavigator(true)
    }

    // Function for Search by Text
    const searchByText = () => {
       dispatch(searchByInputText(searchText))
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        searchByText()
      }, 500)

    return () => clearTimeout(timer)
    }, [searchText])
    
    // Category Selectors
    const categorySelector1 = () => {
       dispatch(categorySelector(refMen.current.textContent))
       navigate('/catalogue')
    }
    const categorySelector2 = () => {
       dispatch(categorySelector(refWomen.current.textContent))
       navigate('/catalogue')
    }
    const categorySelector3 = () => {
       dispatch(categorySelector(refElectronics.current.textContent))
       navigate('/catalogue')
    }
    const categorySelector4 = () => {
       dispatch(categorySelector(refJewelery.current.textContent))
       navigate('/catalogue')
    }

  useEffect(() => {
      isAuthenticated ? toast.success(`Login Successful!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    }) : ""
  }, [isAuthenticated])
  
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
    <header className='flex gap-2 h-[80px] items-center justify-around border-b-1 border-gray-300'>
        <img onClick={()=>navigate('/')} className='w-12 h-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s" alt="logo" />
        <div>
            <img onClick={()=> isSideNavigationOpen()} className='w-10 h-10 inline-block md:hidden' src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg" alt="" />
        </div>
        {/* Categories */}
        <div className='hidden md:block'>
            <ul className='flex gap-8 font-semibold'>
                <li onClick={()=>{categorySelector1()}} ref={refMen} className='cursor-pointer hover:text-[#ff3e6c]'>men</li>
                <li onClick={()=>{categorySelector2()}} ref={refWomen} className='cursor-pointer hover:text-[#ff3e6c]'>women</li>
                <li onClick={()=>{categorySelector3()}} ref={refElectronics} className='cursor-pointer hover:text-[#ff3e6c]'>electronics</li>
                <li onClick={()=>{categorySelector4()}} ref={refJewelery} className='cursor-pointer hover:text-[#ff3e6c]'>jewelery</li>
            </ul>
        </div>
        {/* Search Field */}
        <div className='flex items-center gap-1'>
            <img className='w-4 h-4 bg-gray-300 hidden sm:inline-block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s" alt="search-logo" />
            <input onChange={(e)=>setsearchText(e.target.value)} className='bg-gray-100 px-4 py-2 text-sm pr-16' type="text" value={searchText} placeholder='Search for products, brands and more' />
        </div>
        {/* Profile Logo */}
        <div className='flex gap-2 itesms-center text-sm'>
            <div className='flex flex-col leading-none cursor-pointer' onMouseOver={()=>{setLoginDialog(true)}}>
                <img className='w-10 h-10' src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="profile-logo" />
                <span className=' font-semibold'>Profile</span>
                 {/* Hover Component */}
                {loginDialog &&  <div  onMouseLeave={()=>{setLoginDialog(false)}} className='flex flex-col gap-2 absolute top-20 right-10 border border-gray-300 p-4 bg-white z-10'>
                    <span className='bg-orange-500 h-1 relative bottom-4 w-14 left-20'></span>
                    <span className='text-gray-700 font-semibold'>Welcome</span>
                    <span className='text-gray-700'>To access account and manage orders</span>
                    {isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='text-[#ff3e6c] font-bold border-[0.2px] py-3 mt-4 cursor-pointer hover:border-[1.5px]'>LOGOUT</button> :  <button onClick={() => loginWithRedirect()} className='text-[#ff3e6c] font-bold border-[0.2px] py-3 mt-4 cursor-pointer hover:border-[1.5px]'>LOGIN / SIGNUP</button>}  
                 </div>}
            </div>
            {/* Wishlist Logo */}
            <div onClick={()=>navigate('/wishlist')} className='flex flex-col leading-none cursor-pointer relative'>
                <img className='w-10 h-10' src="https://media.istockphoto.com/id/1433268430/vector/favorite-icon.jpg?s=612x612&w=0&k=20&c=an0bIbEd-o5B4Lhc1i-alApeUnFopvIoiyIQFwKcCgs=" alt="wishlist-logo" />
                <span className='font-semibold'>Wishlist</span>
                <button className='bg-[#ff3e6c] text-white rounded-full text-xs px-1 absolute right-2 bottom-10'>{wishlistCount}</button>
            </div>
            {/* Cart Logo */}
            <div onClick={()=>navigate('/cart')} className='flex flex-col items-center leading-none relative right-1.5 cursor-pointer'>
                <img className='w-10 h-10' src="https://media.istockphoto.com/id/1282650520/vector/shopping-bag-icon-in-black-eco-paper-bag-handbag-icon-vector-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=gMzSXnbZvpJ6FywQYCftnHElWUO10rlo30Lwvrfu8mk=" alt="bag-logo" />
                <span className='font-semibold'>Bag</span>
                <button className='bg-[#ff3e6c] text-white rounded-full text-xs px-1 absolute right-1'>{productCount}</button>
            </div>
        </div>
    </header>
    {sideNavigator && <SideNavigation/>}
    </>
  )
}

export default Header