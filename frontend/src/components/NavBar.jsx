import React from 'react'
// import B from "../assets/B.png"
// import h from "../assets/h.jpg"
import { Link, useNavigate } from 'react-router-dom'; 


function NavBar() {
  const navigate = useNavigate();

  const handleloginClick =()=>{
    navigate('/choose-user')

};
  return (
    <>
    <section className="overflow-hidden">
<div className="bg-white">
<div className="container px-4 mx-auto">
<div className="flex items-center justify-between py-5">
<div className="w-auto">
<div className="flex flex-wrap items-center">
<div className="w-auto pr-2">
  {/* <a href="#">
    <img src="basko-assets/logos/basko-logo-light.png" alt />
  </a> */}
    <Link
        to='/'
        className='self-center whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg text-white'>
          BBC-Dev
        </span>
       
      </Link>
</div>
</div>
</div>
<div className="w-auto">
<div className="flex flex-wrap items-center">
<div className="w-auto hidden lg:block">
  <ul className="flex items-center mr-8">
    <li className="mr-14 font-medium text-black hover:text-gray-200 tracking-tight"><a href="#">Blog</a></li>
    <li className="mr-14 font-medium text-black hover:text-gray-200 tracking-tight"><a href="#">For company</a></li>
    <li className="mr-8 font-medium text-black hover:text-gray-200 tracking-tight border-r border-gray-700 pr-8"><a href="#">Events</a></li>
    <li   className="font-medium text-black hover:text-gray-200 tracking-tight" onClick={handleloginClick}><a href="#">Customer Login</a></li>
  </ul>
</div>
<div className="w-auto hidden lg:block">
  <div className="inline-block"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Apply now</a></div>
</div>
<div className="w-auto lg:hidden">
  <a href="#">
    <svg className="navbar-burger text-indigo-600" width={51} height={51} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={56} height={56} rx={28} fill="currentColor" />
      <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
</div>
</div>
</div>
</div>
</div>


{/* <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
<nav className="relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto">
<div className="flex flex-wrap justify-between h-full">
<div className="w-full">
<div className="flex items-center justify-between -m-2">
  <div className="w-auto p-2">
    <a className="inline-block" href="#">
      <img src="basko-assets/logos/basko-logo-light.png" alt />
    </a>
  </div>
  <div className="w-auto p-2">
    <a className="navbar-burger text-white" href="#">
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  </div>
</div>
</div>
<div className="flex flex-col justify-center py-16 w-full">
<ul>
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Blog</a></li>
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">For Commpany</a></li>
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Events</a></li>
  <li className="font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Customer Login</a></li>
</ul>
</div>
<div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Join our community</a></div>
</div>
</nav>
</div> */}
</div>



</section>


</>
  )
}

export default NavBar