import React, { useState } from 'react'
 
// import images 
import Pineapple from "../assets/9.jpg";
import Orange from "../assets/7.jpeg";
import Waterlemon from "../assets/8.png";
import FruitCard from './FruitCard';
import Divider from './Divider';

const SeasonSpecial = () => {
    
     const[fruits,setFruits]=useState([
        {
            id:1,
            name:"Orange",
            image:Orange,
            price:120,

        },
        {
            id:2,
            name:"Pineapple",
            image:Pineapple,
            price:250
        },
        {
            id:3,
            name:"Waterlemon",
            image:Waterlemon,
            price:45
        }
     ])


  return (
    <section className='w-5/6 mx-auto my-10 relative'>
       <Divider title={"Season Specials"}/>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-16  py-5">
      {fruits.map((fruit) => {
        return <FruitCard key={fruit.id} fruit={fruit} />
      })}
    </div>





    </section>
    
  )
}

export default SeasonSpecial
