import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from "../redux/actions/blogAction";

const BlogSite = () => {
    const dispatch = useDispatch();
    const blogState = useSelector((state) => state.getAllBlogReducer);
    const { blogs } = blogState;

    useEffect(() => {
        dispatch(getAllBlog());
    }, [dispatch]);

    return (
        <>
            {blogs && blogs.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3 p-4">
                                    <img src={blog.image} alt="" className="w-full h-48 object-cover rounded-t-xl" />
                                </div>
                                <div className="w-full md:w-2/3 p-4">
                                    <h2 className="text-2xl font-bold">{blog.titre}</h2>
                                    <p className="text-gray-600">{blog.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-4">
                                <p className="text-gray-600">By {blog.auteur}</p>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No blogs available</p>
            )}
            <NavBar />
            <Details />
            <Footer />
        </>
    );
}

export default BlogSite;