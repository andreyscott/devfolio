import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import AboutSection from '@/components/About'
import Projects from '@/components/ProjectSection'
import Certificate from '@/components/CertificateSection'

import AOS from "aos";

import "aos/dist/aos.css";
import { Navbar } from '@/shared/Navbar'
import Footer from '@/shared/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);




  return (      
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className={`flex min-h-screen w-screen overflow-hidden flex-col items-center justify-between ${inter.className}`} >
<Navbar />
<Hero />
<AboutSection />
<Projects />
<Certificate />
<Footer />

        </motion.main>
  )
}
