import React from 'react';

const FruitCard = ({fruit}) => {
      


  return (
    <div className='rounded-2xl overflow-hidden shadow-xl transform hover:scale-110 duration-100 relative group'>
      <img src={fruit.image} alt={fruit.name} className='w-full object-cover h-52' />
      <div className='flex flex-col items-center my-2 py-1'>
        <span className='font-body text-slate-500 '>{fruit.name}</span>
        <span className='font-body text-slate-500 '>₹{fruit.price}</span>
        <span className='uppercase text-xs font-body text-lime-300 invisible group-hover:visible'>Add to cart</span>
      </div>
      <span className='absolute top-3 right-3 bg-sky-300 text-white rounded-lg p-1 text-sm'>1%off</span>
    </div>
  );
}
export default FruitCard;
