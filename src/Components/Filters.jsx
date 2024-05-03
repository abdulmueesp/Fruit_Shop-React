import React, { useState } from 'react'

const Filter=()=>{
    const [selectItem,setselectItem]=useState(1)

  return (
    <section className='my-10 py-3 w-3/5  md:w-4/6 mx-auto flex flex-col md:flex-row justify-around '>
        <button onClick={()=>setselectItem(1)}
         className={`btn_style ${selectItem===1 ? "bg-green-400 text-white" :'text-slate-500'}`} >Latest</button>
        <button onClick={()=>setselectItem(2)}
        className={`btn_style ${selectItem===2 ? "bg-green-400 text-white" :'text-slate-500'}`}>Bestsellers</button>
        <button onClick={()=>setselectItem(3)} 
        className={`btn_style ${selectItem===3 ? "bg-green-400 text-white" :'text-slate-500'}`}>Special</button>
    </section>
  )
}

export default Filter;