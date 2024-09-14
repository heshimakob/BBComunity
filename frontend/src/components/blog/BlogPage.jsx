import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Details from '../Details';
import axios from 'axios';

const BlogPage = () => {
    const { id } = useParams();
    const [Blog, setBlog] = useState();

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`http://localhost:8080/api/blogs/getBlog/${id}`)
                .then((res) => setBlog(res.data.data));
        };
        fetch();
    }, [id]);

    return (
        <>
            <NavBar />
            {Blog && (
                <>
                    <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
                        <div className='text-center justify-center items-center'>
                            <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{Blog.titre}</span>
                            </h1>
                            <div className="flex justify-center items-center">
                                <div className="w-auto p-2">
                                    <a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">Hire Talent Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Affichage d'un blog avec ses contenus */}
                    <div className='container mx-auto px-4 pt-10'>
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <img className="h-96 w-auto" src={Blog.image} alt={Blog.titre} />
                           <div className='w-full justify-center'>
                           <h1 className='text-bold text-2xl'>{Blog.titre}</h1>
                           <h2 className='text-bold'>{Blog.createdAt}</h2>
                           </div>
                            {/* Utilisation de dangerouslySetInnerHTML pour afficher le contenu HTML */}
                            <div 
                                className='w-full text-xl h-full p-3 mb-6 text-justify items-center leading-7' 
                                dangerouslySetInnerHTML={{ __html: Blog.description }} 
                            />
                        </div>
                    </div>
                </>
            )}
            <Details />
            <Footer />
        </>
    );
};

export default BlogPage;