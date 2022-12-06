import React from 'react'
import {GiJumpingDog} from 'react-icons/gi'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='p-7 flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
    <h1 className='w-full text-3xl font-bold text-[#aefff8] flex'><span className='pr-7'><GiJumpingDog /></span>   Fetch. </h1>
    <ul className='hidden md:flex'>
        <li className='p-4 font-semibold'>Home</li>
        <li className='p-4 font-semibold'>About</li>
        <li className='p-4 font-semibold'>Contact</li>
        <li className='p-4'><button className='bg-[#aefff8] w-[100px] rounded-md text-[#000300] font-semibold h-7'>Order Now!</button></li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#aefff8] flex m-4'><span className='pr-7'><GiJumpingDog /></span>   Fetch. </h1>
    <ul className='p-4'>
        <li className='p-4 font-semibold border-b border-b-gray-600'>Home</li>
        <li className='p-4 font-semibold border-b border-b-gray-600'>About</li>
        <li className='p-4 font-semibold border-b border-b-gray-600'>Contact</li>
        <li className='p-4'><button className='bg-[#aefff8] w-[100px] rounded-md text-[#000300] font-semibold h-7'>Order Now!</button></li>
    </ul>
    </div>
    </div>
  )
}

export default NavBar