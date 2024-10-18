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
import Questions from './Questions';
import Actions from './Actions';
import eclo from "../assets/icons/eclo.svg";
import wito from "../assets/icons/wito.svg";
import institut from "../assets/icons/institut.svg";
import horizon from "../assets/icons/horizon.svg"
import amba from "../assets/icons/amba.svg"


const lorem = new LoremIpsum();

const Home = ({ setProgress }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 3000);
    }, []);

    return (
        <>
            <NavBar />
         
                <section className="pb-8 bg-top bg-cover bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1639664810686-b817b22bb549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D")'}}>
  <div className="container px-4 mx-auto">
    {/* <nav className="flex justify-between items-center py-6">
      <a className="text-3xl text-white font-semibold leading-none" href="#">
        <img className="h-10" src="metis-assets/logos/metis/metis-light-name.svg" alt width="auto" />
      </a>
      <div className="lg:hidden">
        <button className="flex items-center py-2 px-3 text-blueGray-100 hover:text-blueGray-200 rounded border border-blueGray-200 hover:border-blueGray-300">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
        <li><a className="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Product</a></li>
        <li><a className="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Company</a></li>
        <li><a className="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">About Us</a></li>
        <li><a className="text-sm text-blueGray-100 hover:text-blueGray-200" href="#">Features</a></li>
      </ul>
      <div className="hidden lg:block"><a className="mr-2 inline-block px-4 py-3 text-xs text-blueGray-100 hover:text-blueGray-200 font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Log In</a><a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a></div>
    </nav> */}
    <div className="py-12 text-center mt-32">
      <div className="max-w-lg mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl mb-4 text-white font-bold font-heading">
          <span>Transformer</span>   
            <span className="text-blue-600"> l'apprentissage
          des </span>
          <span>métiers du futur</span>
        </h2>
        <p className="text-blueGray-400 leading-relaxed ">Black born community votre platefrome d'apprentissage en ligne </p>
      </div>
      <div><Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" to="/company">Engager maintenant</Link><Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-100 hover:text-blueGray-200 text-center font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded" to="/why">En savoir plus</Link></div>
    </div>
    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
        <img className="mx-auto " src={eclo} alt />
      </div>
    
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
        <img className="mx-auto" src={institut} alt />
      </div>
   
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
        <img className="mx-auto" src={wito} alt />
      </div>
    
    </div>
  </div>


  {/* <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="fixed inset-0 bg-blueGray-800 opacity-25" />
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-semibold leading-none" href="#">
          <img className="h-10" src="metis-assets/logos/metis/metis.svg" alt width="auto" />
        </a>
        <button>
          <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Product</a></li>
          <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
          <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
        </ul>
        <div className="mt-4 pt-6 border-t border-blueGray-100"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
      </div>
      <div className="mt-auto">
        <p className="my-4 text-xs text-blueGray-400">
          <span>Get in Touch</span>
          <a className="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
        </p>
        <a className="inline-block px-1" href="#">
          <img src="metis-assets/icons/facebook-blue.svg" alt />
        </a>
        <a className="inline-block px-1" href="#">
          <img src="metis-assets/icons/twitter-blue.svg" alt />
        </a>
        <a className="inline-block px-1" href="#">
          <img src="metis-assets/icons/instagram-blue.svg" alt />
        </a>
      </div>
    </nav>
  </div> */}



</section>


         

            <div className='pb-24 lg:pb-10 bg-white overflow-hidden'>
                <Centre />
                <Learner />
                <Marque />
                <Service />
                <Outcome />
            </div>
            <Questions/>
            <Actions/>
            <Details />
           
            <Footer />
        </>
    );
};

export default Home;