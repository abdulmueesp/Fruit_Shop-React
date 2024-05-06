import React, { useState } from "react";
import FruitCard from "./FruitCard";
import greenGrapes from "../assets/1.jpeg";
import pomegranate from "../assets/2.jpeg";
import blackGrapes from "../assets/3.jpeg";
import Grapfruit from "../assets/4.jpeg";
import Berry from "../assets/5.jpeg";
import Lemon from "../assets/6.jpeg";


const Items = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "Green Grapes",
      image:greenGrapes,
      price: 110,
    },
    {
      id: 2,
      name: "Pomegranate",
      image:pomegranate,
      price: 190,
    },
    {
      id: 3,
      name: "Lemon",
      image:Lemon,
      price: 140,
    },
    
    {
      id: 4,
      name: "Grape Fruit",
      image:Grapfruit,
      price: 280,
    },
    {
      id: 5,
      name: "Black Grapes",
      image:blackGrapes,
      price: 300,
    },
    {
      id: 6,
      name: "Berry",
      image:Berry,
      price: 250,
    }
  ]);
  return (
    <section className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-16  py-5">
      {fruits.map((fruit) => {
        return <FruitCard key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
};

export default Items;
