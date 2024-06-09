import React from 'react'



export const Header = () => {
  return (
    <>
        <nav className='flex justify-between p-8 text-white	'>
            <span id="brand text-2xl">Threaded</span>
            <ul className='flex'>
                <li><a href="#" className='p-8'>Home</a></li>
                <li><a href="#" className='p-8'>About</a></li>
                <li><a href="#" className='p-8'>Profile</a></li>
            </ul>
        </nav>
    </>
  )
}
