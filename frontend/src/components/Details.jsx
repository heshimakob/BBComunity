import React from 'react'


const  Details =()=>{
  return (
<div className="w-full flex flex-wrap md:flex-nowrap flex-col md:flex-row">
<div className="w-full w-1/2 bg-gray-900 h-[300px] flex items-center justify-center">
<h1 className="text-white text-right">Rester connecter</h1>
  <div className="flex justify-end">
    <input type="email" placeholder="Adresse e-mail" className="text-gray-900 bg-white border-0 focus:outline-none pr-10 pl-4" />
    <span className="absolute right-4 top-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="bg-red-500 rounded-full p-1">
    
      </span>
    </span>
  </div>

</div>
  <div className="w-full w-1/2 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-indigo-800 hover:border-indigo-600 focus:ring-4 focus:ring-indigo-300 transition duration-300 h-[300px] flex items-center justify-center">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2m0-4h2a2 2 0 012 2v4m6 3v3h2a2 2 0 012 2v3m0-10h2a2 2 0 012 2v3m-3 3h6" />
      </svg>
      <input type="text" placeholder="Rejoindre" className="ml-2 text-black bg-white border-0 focus:outline-none" />
    </div>
  </div>
</div>
  )
}
export default Details;