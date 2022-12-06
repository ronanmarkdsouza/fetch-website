import React from 'react'
import Typed from 'react-typed'
import Otw from '../assets/otw.svg'

const Main = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <img src={Otw} alt="on-the-way" />
            <p className='text-[#aefff8] font-bold p-2 text-2xl'>FETCH YOUR CITY IN YOUR HANDS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Fetch</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'> Fetch</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' 
                strings={['Food', 'Groceries','Essentials', 'Clothes']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop/>
            </div>
            <br />
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Get Essentials delivered in 20 minutes.</p>
            <button className='bg-[#aefff8] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-[#000300] text-xl'>Order Now!</button>
        </div>
    </div>
  )
}

export default Main