import React from 'react'
// import B from "../assets/B.png"
// import h from "../assets/h.jpg"
import avatar2 from "../assets/avatar2.png"
import avatar from "../assets/avatar.png"

function NavBar() {
  return (
    <>
    <section className="overflow-hidden">
<div className="bg-white">
<div className="container px-4 mx-auto">
<div className="flex items-center justify-between py-5">
<div className="w-auto">
<div className="flex flex-wrap items-center">
<div className="w-auto pr-2">
  <a href="#">
    <img src="basko-assets/logos/basko-logo-light.png" alt />
  </a>
</div>
</div>
</div>
<div className="w-auto">
<div className="flex flex-wrap items-center">
<div className="w-auto hidden lg:block">
  <ul className="flex items-center mr-8">
    <li className="mr-14 font-medium text-black hover:text-gray-200 tracking-tight"><a href="#">Features</a></li>
    <li className="mr-14 font-medium text-black hover:text-gray-200 tracking-tight"><a href="#">Pricing</a></li>
    <li className="mr-8 font-medium text-black hover:text-gray-200 tracking-tight border-r border-gray-700 pr-8"><a href="#">Automation</a></li>
    <li className="font-medium text-black hover:text-gray-200 tracking-tight"><a href="#">Customer Login</a></li>
  </ul>
</div>
<div className="w-auto hidden lg:block">
  <div className="inline-block"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Try 14 Days Free Trial</a></div>
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
<div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
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
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Features</a></li>
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Pricing</a></li>
  <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Automation</a></li>
  <li className="font-medium text-white hover:text-gray-200 tracking-tight"><a href="#">Customer Login</a></li>
</ul>
</div>
<div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Try 14 Days Free Trial</a></div>
</div>
</nav>
</div>
</div>
<div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-white overflow-hidden">
<div className="container px-4 mx-auto">
<div className="flex flex-wrap -m-8">
<div className="w-full md:w-1/2 p-8">
<div className="md:max-w-lg">
<h1 className="inline-block mb-8 px-3 py-1 text-black font-semibold bg-gray-600 rounded-full">#Black Born Community bootcamp</h1>
<h1 className="font-heading mb-12 text-5xl md:text-6xl text-black tracking-tighter">Learn, create, build and connect...</h1>
<div className="flex flex-wrap -m-2 mb-14">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-black font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">Try 14 Days Free Trial</a></div>
  <div className="w-auto p-2">
    <a className="inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-600 border border-gray-600 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
      <div className="inline-block">
        <svg className="mr-2.5" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-black font-semibold tracking-tight">Download IOS App</span>
    </a>
  </div>
</div>
<div className="max-w-md">
  <div className="flex flex-wrap -m-1.5">
    <div className="w-auto p-1.5">
      <div className="flex flex-wrap">
        <div className="w-auto">
          <img src={avatar} alt />
        </div>
        <div className="w-auto -ml-5">
          <img src={avatar2} alt />
        </div>
        <div className="w-auto -ml-5">
          <img src={avatar} alt />
        </div>
      </div>
    </div>
    <div className="flex-1 p-1.5">
      <p className="text-black tracking-tight">Join our community  12k+ Remote is today.</p>
    </div>
  </div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-8">
<img className="transform hover:-translate-y-2 transition duration-500" src="https://static.shuffle.dev/uploads/files/4f/4f9910a20bd7f07cec71b05c8407c53ae2a9e6e3/Screenshot-from-2024-06-25-13-50-40.png" alt />
</div>
</div>
</div>
</div>
</section>


</>
  )
}

export default NavBar