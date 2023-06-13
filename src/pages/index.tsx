import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import AboutSection from '@/components/About'
import Projects from '@/components/ProjectSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (      
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className={`flex min-h-screen w-screen overflow-hidden flex-col items-center justify-between ${inter.className}`} >
<Hero />
<AboutSection />
<Projects />
<h2 className='text-4xl uppercase w-full bg-blue-400'>
  
  hello peeps</h2>

        </motion.main>
  )
}
