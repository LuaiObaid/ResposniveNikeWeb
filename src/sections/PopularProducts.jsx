import React from 'react';
import { products } from '../constant';
import { star } from '../assets/icons';

const PopularProducts = () => {
  return (
    <section className='w-full p-2 flex flex-col justify-start min-h-screen gap-y-8  '>
      {/* Title */}
      <div>
        <span className='text-black font-bold px-1'>Our</span>
        <span className='text-red-500 font-bold px-1'>Popular</span>
        <span className='text-black font-bold px-1'>Product</span>
      </div>

      {/* Description */}
      <div className='pl-2'>
        <p>Experience top-notch quality and style with our sought-after</p>
        <p>selection. Discover a world of comfort, design, and value.</p>
      </div>

      {/* Product List */}
      <div className='grid grid-cols-2 md:grid-cols-4  w-full '>
     {products.map((shoe, index) => (
      <div key={index} className='flex flex-col justify-start'>
      <img 
        src={shoe.imgURL} 
        alt={shoe.name}
        className=' object-contain rounded-lg shadow-lg m-2'  
      />
      <div className='flex items-center gap-1'>
        <img src={star} alt="star icon" className='w-5 h-5 ml-2' />
       <span>(4.5)</span>
     </div>

      <p className='mt-2 font-semibold text-lg m-2'>{shoe.name}</p>
      <p className='text-red-500 font-bold px-1 m-2'>{shoe.price}</p>
      </div>
  ))}  
</div>

    </section>
  );
}

export default PopularProducts;
