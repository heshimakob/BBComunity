import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Details from '../Details';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import Loading from '../Loading';

const BlogPage = ({setProgress}) => {
    const { id } = useParams();
    const [Blog, setBlog] = useState(null); // Initialisez avec null
    const [loading, setLoading] = useState(true); // État pour gérer le chargement
    const shareUrl = encodeURIComponent(window.location.href);

    const handleShareClick = () => {
        console.log('Click to share');
    };
    useEffect(()=>{
        setProgress(40);
        setTimeout(()=>{
            setProgress(100)
        },2000)
    },[]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/blogs/getBlog/${id}`);
                setBlog(res.data.data);
            } catch (error) {
                console.error("Erreur lors du chargement du blog :", error);
            } finally {
                setLoading(false); // Arrête le chargement, qu'il y ait une erreur ou non
            }
        };

        fetch();
    }, [id]);

    return (
        <>
            <NavBar />
            {loading ? ( // Si en chargement, affichez l'écran de chargement
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-2xl"><Loading/></h2>
                </div>
            ) : ( // Sinon, affichez le contenu du blog
                Blog && (
                    <>
                        <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
                            <div className='text-center justify-center items-center'>
                                <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
                                    <span className=" font-open-sans  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{Blog.titre}</span>
                                </h1>
                                <div className='bbc-container font-open-sans h-full text-xl p-3 mb-6  text-center text-gray-300'>
                                    {Blog.description.replace(/<[^>]+>/g, '').slice(0, 150)}
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="w-auto p-2">
                                        <a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="/company">Hire Talent Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container mx-auto px-4 pt-10'>
                            <div className="bbc-container flex flex-col justify-center items-center">
                                <img className="top-0 left-0 h-96 w-auto mt-[-100px] rounded-xl" src={Blog.image} alt={Blog.titre} />
                                <div className='w-full flex justify-between mt-10 bg-blue-100 rounded-xl p-10'>
                                    <div>
                                        <h1 className='text-bold text-2xl'>{Blog.titre}</h1>
                                        <h2 className='text-bold'>{Blog.createdAt}</h2>
                                    </div>
                                    <div>
                                        <span><h2 className='text-bold bg-red-500 rounded-lg p-1 text-gray-300'>{Blog.auteur}</h2></span>
                                        <span><h2 className='text-bold bg-blue-700 rounded-lg p-1 text-gray-300 mt-10'>{Blog.category}</h2></span>
                                    </div>
                                </div>
                                <div
                                    className='bbc-container text-xl h-full p-3 mb-6 text-justify items-center leading-7'
                                    dangerouslySetInnerHTML={{ __html: Blog.description }}
                                />
                            </div>
                            <div className='bbc-container flex flex-col items-center bg-blue-50 p-4 rounded-lg mb-10'>
                                <button onClick={handleShareClick} className="bg-white rounded-full p-2 mb-2 flex items-center">
                                    <FaShareAlt className="w-6 h-6 mr-2" />
                                    Partager
                                </button>
                                <div className='flex justify-center items-center space-x-4'>
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="w-8 h-8 text-blue-600" />
                                    </a>
                                    <a href={`https://wa.me/?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="w-8 h-8 text-green-600" />
                                    </a>
                                    <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="w-8 h-8 text-pink-600" />
                                    </a>
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="w-8 h-8 text-blue-700" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            )}
            <Details />
            <Footer />
        </>
    );
};

export default BlogPage;