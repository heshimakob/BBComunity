import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import vide from "../assets/vide.png";
import { Link } from 'react-router-dom';
import { getBlogs } from '../store/blogSlice';
import Loading from './Loading';


const BlogSite = ({setProgress}) => {
    const dispatch = useDispatch();
    const { data: blogState } = useSelector((state) => state.blogs);

    const [filteredBlogs, setFilteredBlogs] = useState(blogState);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    useEffect(()=>{
        setProgress(40);
        setTimeout(()=>{
            setProgress(100)
        },2000)
    },[]);

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredBlogs(blogState);
        } else {
            setFilteredBlogs(blogState.filter(blog => blog.category === activeCategory));
        }
    }, [activeCategory, blogState]);

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

    return (
        <>
            <NavBar />
            <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
                <div className='text-center'>
                    <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-white font-bold">Restez connecté</span>
                    </h1>
                </div>
            </div>
            {filteredBlogs && filteredBlogs.length > 0 ? (
                <div className="bbc-container mx-auto p-4 bg-white pt-10">
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
                    <div className="mx-auto flex flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {filteredBlogs.map((blog) => (
                            <div key={blog.id} className="bg-cover bg-center h-96 hover:scale-105 transition duration-300 ease-in-out overflow-hidden m-4 p-4" style={{ backgroundImage: `url(${blog.image})` }}>
                                <div className="flex flex-col justify-center h-full p-4">
                                    <Link className='text-white' to={`/blogPage/${blog._id}`}>
                                        <h2 className="text-4xl font-bold text-gray-300">{blog.titre}</h2>
                                        <div className='w-full h-full text-2xl p-3 mb-6 text-justify items-center leading-7 text-gray-700'>
                                            {blog.description.replace(/<[^>]+>/g, '').slice(20, 120)}
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex justify-between p-4">
                                {/* <p className="text-gray-600 ">By {blog.auteur}</p> */}
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
                    <div className="w-auto flex flex-col justify-center mb-2">
                    <div className="flex flex-wrap justify-center space-x-2 mt-10">
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
                        <div className='flex justify-center items-center md:flex-row lg:flex-row xl:flex-row'>
  {/* <img src={vide} className="bbc-container w-1/2 rounded-md md:w-1/2 lg:w-1/3 xl:w-1/3" /> */}
  <Loading/>
</div>
                    </div>
                    <div className="text-center mb-10">
                        <p>Aucun Blog disponible pour le moment ou vérifier votre connexion internet</p>
                    </div>
                </>
            )}
            <Details />
            <Footer />
        </>
    );
}

export default BlogSite;