import React from 'react'
import { useState } from 'react'
import Clothes from '../assets/clothes.svg'
import Groceries from '../assets/groceries.svg'
import Electronics from '../assets/electronics.svg'
import Food from '../assets/food.svg'
import {TfiArrowCircleRight, TfiArrowCircleLeft} from 'react-icons/tfi'
const About = () => {
    var [slide, setSlide] = useState(0)

    const updateSlideNext = () => {
        if(slide===3){}
        else
        setSlide(++slide)
    }

    const updateSlidePrev = () => {
        if(slide===0){}
        else
        setSlide(--slide)
    }
    
  return (
    <div className='bg-gray-600 w-full py-16 px-4 relative'>
    <div className='w-6 absolute left-10 top-[300px]' onClick={updateSlidePrev}>
        <TfiArrowCircleLeft size={25} color='white'/>
    </div>
    <div className='w-6 absolute right-10 top-[300px]' onClick={updateSlideNext}>
    <TfiArrowCircleRight size={25} color='white'/>
    </div>
    <div className={slide===0 ? 'max-w-[1240px] mx-auto grid md:grid-cols-2 ease-in-out duration-1000' : 'hidden'}>
        <img src={Clothes} alt="clothes" />
        <div>
            <p className='md:text-3xl text-2xl font-bold text-[#aefff8] pl-20 pt-20'>Clothes!</p>
            <h1 className='md:text-4xl sm:text-3xl font-bold text-[#000300] pl-20' >Fetch clothes from your local stores!</h1>
            <p className='text-[#000300] pl-20 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus arcu. In hac habitasse platea dictumst. 
            Mauris a mi vel sapien pulvinar scelerisque. In ligula dolor, luctus vitae lacus id, tempor consequat ligula. 
            Maecenas ac aliquam nisl. Nullam eget congue ipsum. 
            Praesent a accumsan ante, at tempus velit. 
            Phasellus elementum malesuada fermentum. 
            Pellentesque sagittis nisl vel purus gravida, nec dignissim diam tristique. 
            Vestibulum vel lectus quis justo bibendum dignissim. Integer tempus velit pellentesque mi gravida, eu fermentum velit mollis. 
            Curabitur eget venenatis sem, vel lacinia sem. Sed quis gravida augue, sit amet sollicitudin nisl. 
            In ornare libero sollicitudin ipsum aliquet lobortis non ac ex.</p>
            <div className='pl-20'>
                <button className='bg-[#aefff8] w-[175px] rounded-md font-semibold my-6 mx-auto py-2 text-[#000300] text-xl'>Browse Clothes!</button>
            </div>
        </div>
    </div>


    <div className={slide===1 ? 'max-w-[1240px] mx-auto grid md:grid-cols-2 ease-in-out duration-1000' : 'hidden'}>
        <img src={Groceries} alt="groceries" />
        <div>
            <p className='md:text-3xl text-2xl font-bold text-[#aefff8] pl-20 pt-20'>Groceries!</p>
            <h1 className='md:text-4xl sm:text-3xl font-bold text-[#000300] pl-20' >Fetch groceries from your local stores!</h1>
            <p className='text-[#000300] pl-20 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus arcu. In hac habitasse platea dictumst. 
            Mauris a mi vel sapien pulvinar scelerisque. In ligula dolor, luctus vitae lacus id, tempor consequat ligula. 
            Maecenas ac aliquam nisl. Nullam eget congue ipsum. 
            Praesent a accumsan ante, at tempus velit. 
            Phasellus elementum malesuada fermentum. 
            Pellentesque sagittis nisl vel purus gravida, nec dignissim diam tristique. 
            Vestibulum vel lectus quis justo bibendum dignissim. Integer tempus velit pellentesque mi gravida, eu fermentum velit mollis. 
            Curabitur eget venenatis sem, vel lacinia sem. Sed quis gravida augue, sit amet sollicitudin nisl. 
            In ornare libero sollicitudin ipsum aliquet lobortis non ac ex.</p>
            <div className='pl-20'>
                <button className='bg-[#aefff8] w-[175px] rounded-md font-semibold my-6 mx-auto py-2 text-[#000300] text-xl'>Order Groceries!</button>
            </div>
        </div>
    </div>



    <div className={slide===2 ? 'max-w-[1240px] mx-auto grid md:grid-cols-2 ease-in-out duration-1000' : 'hidden'}>
        <img src={Electronics} alt="electronics" />
        <div>
            <p className='md:text-3xl text-2xl font-bold text-[#aefff8] pl-20 pt-20'>Electronics!</p>
            <h1 className='md:text-4xl sm:text-3xl font-bold text-[#000300] pl-20' >Fetch electronics from your local stores!</h1>
            <p className='text-[#000300] pl-20 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus arcu. In hac habitasse platea dictumst. 
            Mauris a mi vel sapien pulvinar scelerisque. In ligula dolor, luctus vitae lacus id, tempor consequat ligula. 
            Maecenas ac aliquam nisl. Nullam eget congue ipsum. 
            Praesent a accumsan ante, at tempus velit. 
            Phasellus elementum malesuada fermentum. 
            Pellentesque sagittis nisl vel purus gravida, nec dignissim diam tristique. 
            Vestibulum vel lectus quis justo bibendum dignissim. Integer tempus velit pellentesque mi gravida, eu fermentum velit mollis. 
            Curabitur eget venenatis sem, vel lacinia sem. Sed quis gravida augue, sit amet sollicitudin nisl. 
            In ornare libero sollicitudin ipsum aliquet lobortis non ac ex.</p>
            <div className='pl-20'>
                <button className='bg-[#aefff8] w-[175px] rounded-md font-semibold my-6 mx-auto py-2 text-[#000300] text-xl'>Get Electronics!</button>
            </div>
        </div>
    </div>


    <div className={slide===3 ? 'max-w-[1240px] mx-auto grid md:grid-cols-2 ease-in-out duration-1000' : 'hidden'}>
        <img src={Food} alt="food" />
        <div>
            <p className='md:text-3xl text-2xl font-bold text-[#aefff8] pl-20 pt-20'>Food!</p>
            <h1 className='md:text-4xl sm:text-3xl font-bold text-[#000300] pl-20' >Fetch food from your local stores!</h1>
            <p className='text-[#000300] pl-20 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus arcu. In hac habitasse platea dictumst. 
            Mauris a mi vel sapien pulvinar scelerisque. In ligula dolor, luctus vitae lacus id, tempor consequat ligula. 
            Maecenas ac aliquam nisl. Nullam eget congue ipsum. 
            Praesent a accumsan ante, at tempus velit. 
            Phasellus elementum malesuada fermentum. 
            Pellentesque sagittis nisl vel purus gravida, nec dignissim diam tristique. 
            Vestibulum vel lectus quis justo bibendum dignissim. Integer tempus velit pellentesque mi gravida, eu fermentum velit mollis. 
            Curabitur eget venenatis sem, vel lacinia sem. Sed quis gravida augue, sit amet sollicitudin nisl. 
            In ornare libero sollicitudin ipsum aliquet lobortis non ac ex.</p>
            <div className='pl-20'>
                <button className='bg-[#aefff8] w-[175px] rounded-md font-semibold my-6 mx-auto py-2 text-[#000300] text-xl'>Order Food!</button>
            </div>
        </div>
    </div>
    

    </div>
  )
}

export default About