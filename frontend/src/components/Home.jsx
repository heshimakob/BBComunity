import React, { useEffect } from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../styles/styles';
import { LoremIpsum } from 'lorem-ipsum';
import avatar2 from "../assets/avatar2.png";
import avatar from "../assets/avatar.png";
import home from "../assets/home.png";
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Outcome from './Outcome';
import Details from './Details';
import Marque from './marque/Marque';
import Service from './Service';
import Informations from './Informations';
import img from "../assets/img.jpg";
import Learner from './Learner';
import Category from './Category';
import Centre from './Centre';
import { motion } from 'framer-motion'; // Importation de Framer Motion

const lorem = new LoremIpsum();

const Home = ({ setProgress }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 2000);
    }, []);

    return (
        <>
            <NavBar />
            <motion.div
                className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden md:h-auto sm:h-auto"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
                }}
                initial={{ opacity: 0 }} // État initial
                animate={{ opacity: 1 }} // État animé
                transition={{ duration: 1 }} // Durée de la transition
            >
                <div className="bbc-container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <motion.h1
                                className="inline-block mb-5 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full mt-16"
                                initial={{ scale: 0 }} // État initial
                                animate={{ scale: 1 }} // État animé
                                transition={{ duration: 0.5 }} // Durée de la transition
                            >
                                👋BIENVENUE
                            </motion.h1>
                            <motion.h1
                                className="font-heading tracking-tight text-gray-100 text-4xl md:text-6xl font-medium max-w-md md:max-w-4xl"
                                initial={{ x: -100, opacity: 0 }} // État initial
                                animate={{ x: 0, opacity: 1 }} // État animé
                                transition={{ duration: 0.75 }} // Durée de la transition
                            >
                                Transformer
                            </motion.h1>
                            <motion.h1
                                className="mb-4 text-3xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"
                                initial={{ y: 50, opacity: 0 }} // État initial
                                animate={{ y: 0, opacity: 1 }} // État animé
                                transition={{ duration: 0.75 }} // Durée de la transition
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 sm:max-w-2xl md:max-w-4xl">l'apprentissage des</span>
                                <span className='relative font-serif font-bold italic text-gray-400'>métiers du futur</span>
                            </motion.h1>

                            <div className="flex flex-wrap -m-1 mb-14 mt-14">
                                <div className="w-auto p-2">
                                    <motion.a
                                        className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200"
                                        href="/register"
                                        whileHover={{ scale: 1.1 }} // Effet de survol
                                        transition={{ duration: 0.3 }} // Durée de la transition
                                    >
                                        Inscription
                                    </motion.a>
                                </div>
                                <div className="w-auto p-2">
                                </div>
                            </div>
                            <div className="max-w-md">
                                <div className="flex flex-wrap -m-1.5">
                                    <div className="w-auto p-1.5">
                                        <div className="flex flex-wrap">
                                            <motion.div whileHover={{ scale: 1.1 }}> // Animation de l'image
                                                <img src={avatar} alt="" />
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.1 }}>
                                                <img src={avatar2} alt="" />
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.1 }}>
                                                <img src={avatar} alt="" />
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-1.5">
                                        <motion.p
                                            className="mt-4 max-w-xl text-lg text-gray-400"
                                            initial={{ x: -100, opacity: 0 }} // État initial
                                            animate={{ x: 0, opacity: 1 }} // État animé
                                            transition={{ duration: 0.75 }} // Durée de la transition
                                        >
                                            Rejoindre notre programme d'apprentissage de plus de 8 cours au profit du peuples africains.
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            {/* <img className="transform hover:-translate-y-2 transition duration-500 rounded-lg" src={home} alt /> */}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='pb-24 lg:pb-10 bg-white overflow-hidden'>
                <Centre />
                <Learner />
                <Marque />
                <Service />
                <Outcome />
            </div>
            <Details />
            <Footer />
        </>
    );
};

export default Home;