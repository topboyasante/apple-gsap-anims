import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

import _14PMSet from '../assets/14promax-set.jpeg'


function Section2() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".about-section",
                    scrub:0.6,
                    start:"top 100%",
                    end:"bottom 100%",
                }
            }
        )

        tl.fromTo(".phone-yellow",
            {
                y:0,
            },
            {
                y:"-50vh",
                duration:1.5
            }
        )
        .fromTo(".phone-red",
            {
                y:0,
            },
            {
                y:"100vh",
                duration:1.5
            },
            0 //the second animation happens 0 seconds after the first one starts
        )

        tl.fromTo(".phones",
            {
               x:"-50vw",
            },
            {
               x:0,
               duration:1 
            },
        )
    })

  return (
    <main className='w-screen h-screen relative about-section overflow-hidden bg-black text-white'>
        <img src={_14PMSet} alt="iphone" 
        className='absolute bottom-[-1em] phones'/>

        <div className="absolute p-5 w-full h-[70vh] md:h-[50vh] flex flex-col justify-center  items-center">
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-semibold'>Meet Dynamic Island.</h1>
            <p className='text-center my-2 text-lg md:text-xl lg:text-2xl'>Dynamic Island bubbles up music, sports scores, phone calls, and so much more — without taking you away from what you’re doing.</p>
        </div>
    </main>
  )
}

export default Section2