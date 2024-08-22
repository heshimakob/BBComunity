import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllBlogs } from "../redux/actions/blog.action";
import vide from "../assets/vide.png"
import { Link } from 'react-router-dom';

const BlogSite = () => {
    const dispatch = useDispatch();
    const blogState = useSelector((state)=>state.blogReducer);

    // console.log(blog)
    // const { blogs } = blogState;

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    return (
        <>
            
            <NavBar />
            <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
      <div className='text-center'>

    <h1 className="mb-4 text-3xl  text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-white font-bold">Restez connecter </span></h1>
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


            {blogState && blogState.length > 0 ? (
  <div className="container mx-auto p-4 bg-white pt-10">
    <div className="mx-auto flex flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {blogState.map((blog) => (
        <div key={blog.id} className="bg-cover bg-center h-96 hover:scale-105 transition duration-300 ease-in-out  overflow-hidden m-4 p-4" style={{ backgroundImage: `url(${blog.image})` }}>
          <div className="flex flex-col justify-center h-full p-4">
         <Link className='text-white' to={`/blogPage/${blog._id}`}>   <h2 className="text-2xl font-bold text-white">{blog.titre}</h2>
         <p className="text-gray-600 font-bold text-4xl font-weight-900 text-white">{blog.description.slice(0,500)} ...</p></Link>
          </div>
          <div className="flex justify-between p-4">
            <p className="text-gray-600 text-white">By {blog.auteur}</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
    <>
   
    <div className=" w-auto flex justify-center mb-2">
                        <img src={vide} className="max-w-full h-auto rounded-md" />
                    </div> <div className="text-center mb-10" >
    <p>Aucun Blog disponible pour le moment ou verifier votre connexion internet</p>
</div>
</>
)}
            <Details />
            <Footer />
        </>
    );
}

export default BlogSite;