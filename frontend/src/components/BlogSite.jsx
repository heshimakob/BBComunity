import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../store/blogSlice';
import Loading from './Loading';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const BlogSite = ({ setProgress }) => {
    const dispatch = useDispatch();
    const { data: blogState } = useSelector((state) => state.blogs);

    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [blogsToShow, setBlogsToShow] = useState(9);

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 2000);
    }, [setProgress]);

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredBlogs(blogState);
        } else {
            setFilteredBlogs(blogState.filter(blog => blog.category === activeCategory));
        }
    }, [activeCategory, blogState]);

    useEffect(() => {
        setVisibleBlogs(filteredBlogs.slice(0, blogsToShow));
    }, [filteredBlogs, blogsToShow]);

    const categories = [
        { name: 'All Blogs', value: 'all' },
        { name: 'Software', value: 'software' },
        { name: 'Art', value: 'art' },
        { name: 'Design', value: 'design' },
        { name: 'VR and AR', value: 'vr' },
        { name: 'Machine Learning', value: 'machine_learning' },
        { name: 'AI', value: 'ai' },
        { name: 'Event', value: 'event' },
    ];

    const handleSeeMore = () => {
        setBlogsToShow(prevCount => prevCount + 9);
    };

    return (
        <>
            <NavBar />
            <div className='pb-8 bg-top bg-cover bg-no-repeat' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1639664810686-b817b22bb549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D")'}}>
            <div className="flex justify-center items-center space-x-2 mb-4 ">
                                    <span className="text-white mt-5">{window.location.hostname}</span>
                                    <FaChevronRight className="text-blue-400 mt-5" />
                                    <span className="text-white mt-5">Nos blogs</span>
                                    {/* <FaChevronRight className="text-blue-400" /> */}
                                    {/* <span className="text-white">{Blog.titre}</span> */}
                                </div>
                <div className='text-center'>
                    <motion.h1
                        className="inline-block mb-5 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full mt-16"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        👋 Nos blogs
                    </motion.h1>
                    <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
                        <span className="font-open-sans tex-xl text-white font-bold mb-10">Restez connecté</span>
                    </h1>
                </div>
            </div>
            {filteredBlogs && filteredBlogs.length > 0 ? (
                <div className="bbc-container mx-auto p-4 bg-white pt-10 border-l border-r border-gray-100">
                    <div className="flex flex-col items-center space-y-4 mb-6">
                        <div className="flex flex-wrap justify-center space-x-2">
                            {categories.map(category => (
                                <button
                                    key={category.value}
                                    onClick={() => setActiveCategory(category.value)}
                                    className={`px-4 py-2 font-semibold rounded-lg transition duration-200 text-sm sm:text-base 
                                    ${activeCategory === category.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-500'}`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {visibleBlogs.map((blog) => (
                            <div key={blog.id} className="bg-cover bg-center overflow-hidden border border-gray-100 p-4 m-2 rounded-lg transition-transform transform hover:scale-105">
                                <div className='w-full'>
                                    <Link to={`/blogPage/${blog._id}`}>
                                        <img className="w-full h-48 object-cover rounded-lg" src={blog.image} alt={blog.titre} />
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-between h-full p-4">
                                    <Link className='text-white' to={`/blogPage/${blog._id}`}>
                                        <h2 className="text-2xl font-bold text-blue-800 hover:underline hover:underline-offset-2">{blog.titre}</h2>
                                        <div className='flex justify-between text-blue-600 mt-5'>
                                            <h2 className="rounded-2xl p-1 bg-blue-200 font-bold p-2" >{blog.category}</h2>
                                            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                                                lire plus...
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {blogsToShow < filteredBlogs.length && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleSeeMore}
                                className="px-6 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition duration-200"
                            >
                                Voir plus
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center mb-10">
                    <Loading />
                    <p>Aucun Blog disponible pour le moment ou vérifier votre connexion internet</p>
                </div>
            )}
            <Details />
            <Footer />
        </>
    );
};

export default BlogSite;
