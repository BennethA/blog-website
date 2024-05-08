import Model from './Model'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6"


const Header = (props) => {

  const navItems = [
    {path: "/", link: "Home"},
    {path: "/blogs", link: "Blogs"},
    {path: "/about", link: "About Us"}
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModelOpen, setIsModelOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const openModel = () => {
    setIsModelOpen(true);
    setIsMenuOpen(!isMenuOpen);
  }

  const closeModel = () => {
    setIsModelOpen(false);
  }

  return (
    <header className='bg-blue-950 z-50 text-white fixed top-0 right-0 left-0'>
      <nav className='px-4 py-6 h-[60px] max-w-7xl flex justify-between items-center'>
        <a href="/" className='text-xl font-bold '>BLOG<span className='text-yellow-500'>SITE</span></a>
        <ul className='lg:flex items-center gap-12 text-lg hidden'>
          {
            navItems.map(({path, link}) => 
              <li className='' key={path}>
                <NavLink className={({isActive}) => 
                  isActive 
                  ? "bg-orange-500 text-black border-2 p-1 rounded"  
                  : "" 
                  } to={path}>
                    {link}
                </NavLink>
              </li>
            )
          }
        </ul>
        <div className=' lg:flex gap-4 items-center hidden'>
          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in-out' onClick={props.loggedIn ? "" : openModel}>
            {
              props.loggedIn ? 'ben' : 'Log In'
            }
          </button>
        </div>
        <Model isOpen={isModelOpen} onClose={closeModel}/>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
            }
          </button>
        </div>
      </nav>
      <div>
        <div className={`lg:hidden gap-12 text-lg space-y-4 px-4 py-6 mt-14 bg-blue-900 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({path, link}) => 
              <ul>
                <li className='border rounded text-center hover:bg-white hover:text-black active:bg-white active:text-black' key={path}>
                  <Link onClick={toggleMenu} to={path}>{link}</Link>
                </li>
              </ul>
            )
          }
          <button className='border rounded text-center w-full hover:bg-white hover:text-black active:bg-white active:text-black' onClick={props.loggedIn ? '' : openModel}>
            {
              props.loggedIn ? 'ben' : 'Log In'
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header