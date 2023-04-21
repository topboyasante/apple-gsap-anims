import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import _14PMUber from '../assets/14promax-uber.jpeg'

function Section3() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".content",
            {
                opacity:1,
                duration:1,
                scrollTrigger:{
                    trigger:".dynamic-island-section-1",
                    scrub:0.6,
                    start:"top 50%",
                    end:"bottom 100%",
                }
            }
        )
    })

  return (
    <main className='w-[100%] lg:h-screen dynamic-island-section-1 overflow-hidden bg-black text-white flex justify-around items-center p-8 '>
       <section className="flex flex-col lg:flex-row justify-around items-center opacity-0 content gap-5">
        <div className='lg:w-[50%] dynamic-island-text-1'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Meet Dynamic Island.</h1>
            <p className='text-2xl  my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur dolore obcaecati, 
                molestiae dolor error est unde impedit iure ducimus cumque similique repudiandae architecto illum cupiditate doloremque, distinctio 
                in enim mollitia facilis. Veniam distinctio fugit, tempora recusandae sunt aut nostrum.</p>
        </div>
            <img src={_14PMUber} alt="" className="phone"/>
       </section>
    </main>
  )
}

export default Section3