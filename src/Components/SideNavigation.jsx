import React from 'react'
import { useRef } from 'react'
import { categorySelector } from '../Setup/Redux/State/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const SideNavigation = () => {
    // Ref's for Category
    const refMen = useRef()
    const refWomen = useRef()
    const refElectronics = useRef()
    const refJewelery = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
    return (
        <aside className='h-screen bg-white absolute left-0 z-10 w-[180px]'>
            <ul className='flex flex-col gap-8 font-semibold pl-10 pt-5'>
                <li onClick={() => { categorySelector1() }} ref={refMen} className='cursor-pointer hover:text-[#ff3e6c] border-b-2 border-gray-200 pb-2'>men</li>
                <li onClick={() => { categorySelector2() }} ref={refWomen} className='cursor-pointer hover:text-[#ff3e6c] border-b-2 border-gray-200 pb-2'>women</li>
                <li onClick={() => { categorySelector3() }} ref={refElectronics} className='cursor-pointer hover:text-[#ff3e6c] border-b-2 border-gray-200 pb-2'>electronics</li>
                <li onClick={() => { categorySelector4() }} ref={refJewelery} className='cursor-pointer hover:text-[#ff3e6c] border-b-2 border-gray-200 pb-2'>jewelery</li>
            </ul>
        </aside>
    )
}

export default SideNavigation