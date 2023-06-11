/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, lazy } from 'react'
import bg from '../../../public/images/bg.jpg'
import Image from 'next/image'


export const Hero = () => {
  const EarthCanvas = lazy(() => import('../Canvas/Earth')
  )
  
  return (
    <section  className=' relative  bg-center z-0 bg-cover bg-no-repeat w-screen h-screen flex flex-col md:flex-row'>
            <Image src={bg} alt='bg' layout='fill' objectFit='cover'
            className='bg-center z-0 bg-cover bg-no-repeat w-screen h-screen'
            // width={1920}
            // height={1080}
             />
            


        <div className='z-10 w-full pt-32 bg-transparent mx-6 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
        <span className="font-black text-2xl tracking-widest leading-loose flex items-center">
          {"Hi, I'm".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-[#00c7ff] headerText px-1 hover:cursor-pointer hover:-mt-5 transition-all duration-500 hover:duration-100">
                  {letter}
                </span>
              );
            })}
            <span className='w-full h-auto pl-3 flex items-center'>

             {"Andrew".split("").map((letter, index) => {
              return (
                <span key={index} className="text-[#915EFF] headerText pl-1 hover:text-pink-500 hover:cursor-pointer hover:-mt-5 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
            </span>

           
          </span>
          <p className={`text-[#dfd9ff] uppercase  font-monos font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I develop Great, user  interfaces <br className="sm:block hidden" />
            A Front-end specialist
          </p>
       
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
<Suspense fallback={<div className='text-2xl flex justify-center  '>Loading....</div>}>
      
          <EarthCanvas />

</Suspense>
      
        </div>
        </div>

    </section>
  )
}
