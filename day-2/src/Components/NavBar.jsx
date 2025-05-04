import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
        <img src="./Frame 2 1.png" alt="" />
        <ul className='flex gap-5 mt-5'>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default NavBar