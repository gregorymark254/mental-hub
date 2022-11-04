import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/icon.png'


const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);

  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <section>
      <main className="bg-[#1B5A7A] text-white">
        <nav className='flex justify-between items-center h-20 px-4  w-full text-white bg-transparent'>
          {/* Top nav */}
          <span className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap">Mental Health Hub</span>
          </span>
          <ul className='hidden md:flex'>
            <li>
              <Link to="/" className="font-light px-3 py-2 hover:text-red-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="font-light px-3 py-2 hover:text-red-400">Who We Are</Link>
            </li>
            <li>
              <Link to="/support" className="font-light px-3 py-2 hover:text-red-400">Support Us</Link>
            </li>
            <li>
              <Link to="/contact" className="font-light px-3 py-2 hover:text-red-400">Contact Us</Link>
            </li>
          </ul>
          <div className='hidden md:flex'>
            <Link to="/contact" className="text-white bg-[#FEB139] hover:text-blue-700  rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0">Donate</Link>
          </div>
          
          {/* Responsive Nav */}
          {!navIsShown && (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}
          {navIsShown && (
            <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
              <div className='flex justify-between border border-b-2 border-b-black'>
                <span className="flex items-center ">
                  <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo"/>
                  <span className="self-center text-xl font-semibold whitespace-nowrap">Mental Hub</span>
                </span>
                <svg xmlns='http://www.w3.org/2000/svg'fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
                </svg>
              </div>
              <ul className=' mb-4'>
                <li>
                  <a href="/" className="font-bold px-3 py-3 text-blue-700 hover:text-red-400">Home</a>
                </li>
                <li>
                  <a href="/about" className="font-bold px-3 py-2 text-blue-700 hover:text-red-400">Who We Are</a>
                </li>
                <li> 
                  <a href="/support" className="font-bold px-3 py-2 text-blue-700 hover:text-red-400">Support Us</a>
                </li>
                <li>
                  <a href="/contact" className="font-bold px-3 py-2 text-blue-700 hover:text-red-400">Contact Us</a>
                </li>
              </ul>
              <a href="/contact" className="text-white bg-[#FEB139] hover:text-blue-700  rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0">Donate</a>
            </div>
          )}
        </nav>
      </main>
    </section>
  )
}

export default Nav
