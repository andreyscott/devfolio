import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'

// import ScrollStatus from '../../components/Scroll'

import { MenuData } from '@/data/data'

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
      if (window.scrollY >= 0) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };

  const handleOpenNavMenu = () => {
    setIsNavOpen(prev => !prev)
  }
  // window.addEventListener("scroll", changeNavbarColor);


  const { asPath } = useRouter()

  return (
    <>
    <header className='fixed z-10 w-full flex-col mx-auto py-2 px-4 lg:px-9 lg:py-3 bg-transparent backdrop-blur-[80px] flex'>

     <div className='flex w-full items-center justify-between lg:justify-between'>
      <h1 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3b5fe2] to-[#fff]'>
<Link href='/'>
  Andrew</Link> 
         </h1>

      {isNavOpen ? (
        <HiOutlineX
          onClick={handleOpenNavMenu}
          size={32}
          className='lg:hidden z-10 cursor-pointer'
        />
      ) : (
        <HiMenuAlt1
          onClick={handleOpenNavMenu}
          size={32}
          className='lg:hidden z-10 cursor-pointer rotate-180 text-digitux-light'
        />
      )}

      {/* Mobile View */}
      <nav
        className={
          isNavOpen
            ? 'fixed top-0 right-0 w-4/5 h-screen text-center pt-28 bg-digitux-dark/95 backdrop-blur-[80px] ease-in-out duration-300 overflow-auto'
            : 'fixed top-0 -right-full w-4/5 h-screen text-center pt-28 bg-digitux-dark/95 backdrop-blur-[80px] ease-in-out duration-300 overflow-auto'
        }>
        <ul>
          {MenuData.map(({ id, label, navUrl }) => (
            <li key={id} className='pb-8'>
              <Link href={navUrl} onClick={handleOpenNavMenu}>
                <span
                  className={
                    asPath === navUrl
                      ? 'text-white font-bold border-b-2 border-digitux-pblue'
                      : 'text-white/90 hover:text-white hover:border-b-2 border-digitux-pblue'
                  }>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Desktop */}
      <nav className='hidden lg:flex'>
        <ul className='flex gap-6'>
          {MenuData.map(({ id, label, navUrl }) => (
            <li key={id}>
              <Link href={navUrl}>
                <span
                  className={
                    asPath === navUrl
                      ? ' text-digitux-light font-bold border-b-2 border-digitux-pblue '
                      : 'text-digitux-light/80 hover:text-digitux-light hover:border-b-2 border-digitux-pblue'
                  }>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      {/* <ScrollStatus /> */}
    </header>
</>
  )
}
