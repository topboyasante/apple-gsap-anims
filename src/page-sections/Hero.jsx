import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import {AiFillApple} from 'react-icons/ai'

import _14Yellow from '../assets/14-yellow.jpeg'
import _14Red from '../assets/14-red.jpeg'

function Hero() {

   useEffect(()=>{
        const tl = gsap.timeline()

        tl.fromTo(".phone-yellow",
            {
                y:"-50vh"
            },
            {
                y:0,
                duration:1.5
            }
        )
        .fromTo(".phone-red",
            {
                y:"100vh"
            },
            {
                y:0,
                duration:1.5
            },
            0 //the second animation happens 0 seconds after the first one starts
        )
        tl.fromTo(".header-text",
            {
                opacity:0
            },
            {
                opacity:1,
                duration:1
            },
        )
   }) 

  return (
    <main className='w-full h-screen relative overflow-hidden'>
        <img src={_14Yellow} alt=" phone-yellow"
        className='absolute right-[-5em] phone-yellow'/>
        <img src={_14Red} alt="phone-red" 
        className='absolute bottom-0 rotate-180 phone-red'/>

        <section className="absolute z-[2] flex justify-center items-center w-full h-full">
            <section className='p-3 header-text'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-semibold'>Designed to make a difference.</h1>
                <p className='text-center my-2 text-lg md:text-xl lg:text-2xl'>High resolution and color accuracy make everything look sharp and true to life.</p>
                <p className='text-center my-2 text-lg md:text-xl lg:text-2xl'>Dynamic Island bubbles up music, sports scores, phone calls, and so much more — without taking you away from what you’re doing.</p>

                <button className="flex justify-around items-center gap-2 bg-black text-white  px-4 py-2 rounded-lg w-[150px] mx-auto">
                    <AiFillApple size={25}/>
                    <p className='text-lg'>Shop Now</p>
                </button>
            </section>
        </section>
    </main>
  )
}

export default Hero