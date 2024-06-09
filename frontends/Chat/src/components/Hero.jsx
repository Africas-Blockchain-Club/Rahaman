import React from 'react'
import heroImage from '../assets/hero.svg';



export const Hero = () => {
  return (
    <div className='container pl-20 mt-40 text-white flex justify-between'>
        <div className="caption">
            <p className='text-7xl'>
            <span>The Best Public</span> <br />
            <span className='text-emerald-600'>Decentralised </span><br />
            <span>Twitter.</span>
            </p>

            <p className='mt-8'>Empowering Users With <span className='text-emerald-600'>Ownership</span> and getting rid of <span className='text-emerald-600'>Censorship</span></p>
        </div>
        <div className="hero-image">
        <img src={heroImage} alt="a computer image for Threaded a decentralised twitter" className='text-emarald-600'/>
        </div>
    </div>
  )
}
