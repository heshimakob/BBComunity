import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../store/blogSlice';

const RecentBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.data);

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const recentBlogs = blogs ? blogs.slice(-4).reverse() : [];

    const truncateDescription = (description, length) => {
        return description.length > length ? description.slice(0, length) + '...' : description;
    };

    return (
        <div className="bbc-container mx-auto p-4">
            <h1 className='text-left font-bold text-blue-600 text-2xl'> Voir aussi:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-cover bg-center overflow-hidden border border-gray-100 p-4 rounded-lg transition-transform transform hover:scale-105 flex flex-col"
                    >
                        <Link to={`/blogPage/${blog._id}`} className="w-full mb-4">
                            <img className="w-full h-48 object-cover rounded-lg" src={blog.image} alt={blog.titre || 'Blog Image'} />
                        </Link>
                        <div className="flex flex-col justify-between h-full p-4">
                            <Link className='text-white' to={`/blogPage/${blog._id}`}>
                                <h2 className="text-lg md:text-xl font-bold text-blue-800 hover:underline hover:underline-offset-2">{blog.titre}</h2>
                            </Link>
                            <div
                                className='bbc-container text-sm md:text-lg h-full p-3 mb-6 text-justify items-center leading-7'
                                dangerouslySetInnerHTML={{ __html: truncateDescription(blog.description, 120) }}
                            />
                            <div className='flex justify-between text-blue-600 mt-5'>
                                <h2 className="rounded-2xl p-1 bg-blue-200 font-bold p-2">{blog.category}</h2>
                                <Link to={`/blogPage/${blog._id}`}>
                                    <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                                        Lire plus...
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentBlogs;
