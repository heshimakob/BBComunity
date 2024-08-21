import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Details from '../Details';


const BlogPage = () => {
  const id= useParams().id;
  return (
    <>
    <NavBar/>
    <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
      <div className='text-center'>

    <h1 className="mb-4 text-3xl  text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Restez connecter </span></h1>
    <div className=" flex justify-center items-center">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">Hire Talent Now</a></div>
  {/* <div className="w-auto p-2">
    <a className="inline-flex items-center px-5 py-4 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-indigo-800 border border-gray-800 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
      <div className="inline-block">
        <svg className="mr-2.5" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-gray-100 font-semibold tracking-tight">Make a donation</span>
    </a>
  </div> */}
</div>
    </div>
    </div>
      <Details/>
      <Footer/>
      
    </>
  )
}

export default BlogPage
