import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Details from '../Details';
import axios from 'axios';
import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import Loading from '../Loading';
import Actions from '../Actions';
import RecentBlogs from '../RecentBlogs';
import { FaReact } from 'react-icons/fa'; // Assurez-vous d'importer l'icône React

const BlogPage = ({ setProgress }) => {
    const { id } = useParams();
    const [Blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const shareUrl = encodeURIComponent(window.location.href);

    const handleShareClick = () => {
        console.log('Click to share');
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 2000);
    }, []);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/blogs/getBlog/${id}`);
                setBlog(res.data.data);
            } catch (error) {
                console.error("Erreur lors du chargement du blog :", error);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [id]);

    // Format de la date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    return (
        <>
            <NavBar />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-2xl"><Loading /></h2>
                </div>
            ) : (
                Blog && (
                    <>
                        <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=450&q=80&blend=1e293b&sat=30&blend-mode=multiply")' }}>
                            <div className='text-center justify-center items-center'>
                                <div className="flex justify-center items-center space-x-2 mb-4">
                                    <span className="text-white">{window.location.hostname}</span>
                                    <FaChevronRight className="text-blue-400" />
                                    <span className="text-white">Blog</span>
                                    <FaChevronRight className="text-blue-400" />
                                    <span className="text-white">{Blog.titre}</span>
                                </div>
                                <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
                                    <span className="font-open-sans text-white">{Blog.titre}</span>
                                </h1>
                                <div className='bbc-container font-open-sans h-full text-xl p-3 mb-6 text-center text-gray-300'>
                                    {Blog.description.replace(/<[^>]+>/g, '').slice(0, 150)}
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="w-auto p-2">
                                        <a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="/company">Hire Talent Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-container mx-auto px-4 pt-10'>
                            <div className="bbc-container flex flex-col justify-center items-center">
                                <div className='relative h-60 sm:h-96 w-full -translate-y-28 -mb-28 sm:-translate-y-44 sm:-mb-44'>
                                <div className='absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-52 sm:h-80 w-full ifg-randomise-bg-color'></div>
                                <img className="relative w-full h-60 sm:h-96 px-4 sm:px-6 object-cover" src={Blog.image} alt={Blog.titre} />
                                </div>
                                <div className='w-full flex justify-between mt-10 bg-gray-100 rounded-xl p-10'>
                                    <div>
                                        <h1 className='text-bold text-2xl'>{Blog.titre}</h1>
                                        <h2 className='text-bold'>{formatDate(Blog.createdAt)}</h2> {/* Date formatée ici */}
                                    </div>
                                    <div>
                                        <span><h2 className='text-bold bg-red-500  p-2 text-gray-300'>{Blog.auteur}</h2></span>
                                        <span><h2 className='text-bold bg-blue-400  p-2 text-gray-300 mt-10'>{Blog.category}</h2></span>
                                    </div>
                                </div>
                                <div
                                    className='bbc-container text-xl h-full p-3 mb-6 text-justify items-center leading-7'
                                    dangerouslySetInnerHTML={{ __html: Blog.description }}
                                />
                            </div>
                            <div className='bbc-container flex flex-col items-center bg-white p-4 rounded-lg mb-10'>
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
            <RecentBlogs />
            <Actions />
            <Details />
            <Footer />
        </>
    );
};

export default BlogPage;
