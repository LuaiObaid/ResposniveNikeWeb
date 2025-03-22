import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section
       id='home'
       className='w-full border-2 border-red-500 p-2 
       flex xl:flex-row- flex-col justify-center min-h-screen gap-10 max-w-[1440px] mx-auto'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start
       w-full max-xl:padding-x pt-28'>
        <p>Our Summer Collection</p>
        <h1> <span>The New Arrival </span>
        <br />
        <span>Nike </span>
        Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation
          for your acitive life
        </p>
        <Button label="ShoP now"
        iconURL={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero