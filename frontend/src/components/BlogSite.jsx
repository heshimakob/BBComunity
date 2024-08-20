import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllBlogs } from "../redux/actions/blog.action";
import vide from "../assets/vide.png"

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
            {blogState && blogState.length > 0 ? (
  <div className="container mx-auto p-4 bg-white ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogState.map((blog) => (
        <div key={blog.id} className="bg-cover bg-center h-96 hover:scale-105 transition duration-300 ease-in-out rounded-xl shadow-md overflow-hidden m-4 p-4" style={{ backgroundImage: `url(${blog.image})` }}>
          <div className="flex flex-col justify-center h-full p-4">
            <h2 className="text-2xl font-bold text-white">{blog.titre}</h2>
            <p className="text-gray-600 font-bold text-4xl font-weight-900 text-white">{blog.description}</p>
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