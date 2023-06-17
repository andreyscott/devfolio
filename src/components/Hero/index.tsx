/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, lazy } from 'react'
import bg from '../../../public/images/bg.webp'
import logo from '../../../public/images/astronout.webp'
import logo1 from '../../../public/images/astronout1.png'
import Image from 'next/image'


export const Hero = () => {
  const EarthCanvas = lazy(() => import('../Canvas/Earth')
  )
  
  return (
    <section  id='hero'
    className=' relative  bg-center z-0 bg-cover bg-no-repeat w-screen h-screen flex flex-col md:flex-row'>
            <Image src={bg} alt='bg' layout='fill' objectFit='cover'
            className='bg-center z-0 bg-cover bg-no-repeat w-screen h-screen'
            // width={1920}
            // height={1080}
             />
            
            <div className="image animate-astronout hidden lg:flex absolute top-14 right-40 w-[300px]">
      <Image className='w-96 ast-img animate-astronout' src={logo1} alt="astronout1"
      width={384}
      height={384}
      />
    
      </div>
      <div className="image animate-astronout1 bottom-10 right-28  absolute w-[300px] flex ">
     
      <Image className='w-96 ast-img' src={logo} alt="astronout2"
      width={384}
      height={384}
       />
      </div>

        <div className='z-10 w-full pt-48 bg-transparent mx-6 flex flex-col md:flex-row'>
        <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
         className='w-full '>
        <span className="font-black text-3xl lg:text-4xl tracking-widest leading-loose flex items-center">
          {"Hi, I'm".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-pink-500 headerText px-1 hover:cursor-pointer hover:-mt-5 transition-all duration-500 hover:duration-100">
                  {letter}
                </span>
              );
            })}
            <span className='w-full h-auto pl-3 flex items-center'>

             {"Andrew".split("").map((letter, index) => {
              return (
                <span key={index} 
                className="text-[#915EFF] headerText pl-1 hover:text-pink-500 hover:cursor-pointer hover:-mt-5 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
            </span>

           
          </span>
          <p className={`text-[#dfd9ff] uppercase  font-monos font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I develop Great, user  interfaces <br className="sm:block" />
            A Front-end specialist
          </p>
       
        </div>
        
        </div>

    </section>
  )
}
