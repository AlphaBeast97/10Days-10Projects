import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 sm:pl-10 sm:pr-10'>
      <a className='' href="#nike">
        <img src="./brand_logo.png" alt="nike" />
      </a>
      <ul className='flex mt-2 gap-5 lg:gap-10'>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#location">LOCATION</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="contact">CONTACT</a></li>
      </ul>
      <button className='text-white w-15 bg-[#d01c28] lg:w-20'>
        Login
      </button>
    </nav>
  )
}

export default NavBar