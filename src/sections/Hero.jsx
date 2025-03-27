import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constant'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  return (
    <section
    id='home'
    className='w-full p-2 
    flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px] mx-auto'>
   <div className='relative xl:w-2/5 flex flex-col justify-center items-start
    w-full max-xl:padding-x pt-28'>
     <p className='text-xl font-sans text-red-500'>Our Summer Collection</p>
     <h1 className='mt-10 font-palanquin text-7xl max-sm:text-[72px] max-sm:leading-[82px]
     font-bold'> 
       <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
         The New Arrival 
       </span>
       <br />
       <span className='text-red-500 inline-block mt-3'>Nike </span>
       Shoes
     </h1>
     <p className='font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-1 sm:max-w-sm'>
       Discover stylish Nike arrivals, quality comfort, and innovation for your active life
     </p>
     <Button label="Shop now" iconURL={arrowRight}/>
     <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
       {statistics.map((stat, index) => (
         <div key={index}>
           <p className='text-4xl font-palanquin font-bold '>{stat.value}</p>
           <p className='leading-7 font-montserrat text-slate-400'>{stat.label}</p>
         </div>
       ))}
     </div>
   </div>
   <div className='relative flex-1 flex justify-center items-center
   xl-:min-h-screen max-xl:py-40 bg-slate-300 bg-hero 
   bg-cover bg-center'>
     <img src={bigShoe1} alt="shoe collection"
       width={610} 
       height={500}
       className='object-contain relative z-10'/>
    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]
    sm:left-[10%] max-sm:px-6
    '>
      {shoes.map((shoe, index) => (
      <div key={index}>
      <ShoeCard
        imgUrl={shoe}
        changeBigShoeImage={(newImage) => {
          console.log("New Image Selected:", newImage);
        }}
        bigShoeImg={bigShoe1} // Pass the current big image
      />
      </div>
     ))}
   </div>

   </div>
 </section>
 
  )
}

export default Hero