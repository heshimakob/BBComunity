import React from 'react'


const  Details =()=>{
  return (
<div className="flex">
    <div className="w-1/2 bg-gray-900 h-[300px] flex items-center justify-center">
     
        <p className="text-white">Contenu du div gauche</p>
    </div>
    <div className="w-1/2 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-indigo-800 border border-gray-800 hover:border-indigo-600  focus:ring-4 focus:ring-indigo-300 transition duration-300 h-[300px] flex items-center justify-center">
 
        <p className="text-black">Contenu du div droit</p>
    </div>
</div>
  )
}
export default Details;