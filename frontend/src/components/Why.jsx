import React, { useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';

import Informations from './Informations';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import Team from './Team';
import Stat from './Stat';
import { FaChevronRight } from 'react-icons/fa';
import Marque from './marque/Marque';

const  Why =({setProgress})=>{
  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
        setProgress(100)
    },2000)
},[]);


  return (
    <>
    <NavBar/>


    <div className='pb-8 bg-top bg-cover bg-no-repeat' style={{backgroundImage: 'url("https://images.unsplash.com/photo-1639664810686-b817b22bb549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D")'}} >
      
    <div className="flex justify-center items-center space-x-2 mb-4">
                                    <span className="text-white mt-5">{window.location.hostname}</span>
                                    <FaChevronRight className="text-blue-400 mt-5" />
                                    <span className="text-white mt-5">Pourquoi nous ?  </span>
                                    {/* <FaChevronRight className="text-blue-400" /> */}
                                    {/* <span className="text-white">{Blog.titre}</span> */}
                                </div>
      
      <div className='max-w-lg mx-auto text-center justify-center items-center mb-8'>
      <motion.h1
                        className="inline-block mb-5 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full mt-16 text-left"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        👋 Pourquoi nous BBComunity Academy?
                    </motion.h1>

    <h1 className="text-3xl md:text-4xl mb-4 text-white font-bold font-heading "><span className="text-white">
Accélérez votre carrière
avec Black Born Community</span></h1>
<p className='text-blueGray-400 leading-relaxed '>Vous pouvez vivre n’importe où dans le monde et travailler sur des projets technologiques stratégiques pour les meilleures marques mondiales. Profitez des programmes d’apprentissage et de développement de carrière et réseautez avec une communauté dynamique de collègues technologues. Rejoignez le marché mondial Andela dès maintenant.</p>
    <div className=" bbc-container  flex justify-center items-center">
  <div className=" w-auto p-2"><Link className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" to="/company" > Engager un talent</Link></div>
  <div className="w-auto p-2">
    {/* <a className="inline-flex items-center px-5 py-4 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-indigo-800 border border-gray-800 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
      <div className="inline-block">
        <svg className="mr-2.5" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-gray-100 font-semibold tracking-tight">Make a donation</span>
    </a> */}
  </div>
</div>
    </div>








    </div>
    <Stat/>
    <Informations/>
    <Team/>
    <Marque/>


{/* 
    <div className="bg-white min-h-screen flex flex-col justify-center items-center mt-10 mb-10" >
    <div className="bg-blue-100 p-8 rounded-lg shadow-md max-w-5xl h-96 text-center" style={{
  backgroundImage: `url(${equipe})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
      <p className="text-4xl font-bold text-blue-900">Accélérez la vitesse d’embauche</p>
      <p className="text-2xl font-bold mt-4 text-blue-950">Nous sommes une startup oeuvrant dans le numerique et innovation technologique spécialisée dans le developpemtn logiciel, l'Intelligence Artificielle,Design UI UX  et realitee . Acteur clé de la transformation numérique des Industries Culturelles et Créatives, nous avons des partenariats solides, dont celui avec l'Institut français de Goma, pour promouvoir l'innovation et l'excellence technologique.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-900">Connaitre de numerique au debutant</h2>
        <p className="mt-4">Nous façonnons le futur grâce à la technologie.</p>
        <img src={ai} alt="Hero Image" className="w-full mt-4 rounded-md" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Nos projets
          <span className="ml-2">→</span>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Notre expertise
          <span className="ml-2">→</span>
        </button>
      </div>

      <div className="bg-pink-100 p-6 rounded-lg shadow-md" >
        <h2 className="text-2xl font-bold text-pink-900">Obtenir les produits de hautes qualites en moindre cout</h2>
        <p className="mt-4">Nous partageons notre voyage, nos passions et nos histoires.</p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4">
          <span className="ml-2">→</span>
        </button>

        <div className="bg-pink-100 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-pink-900">Embauchee , Etudier</h2>
          <p className="mt-4">Nous organisons des formation pertinente</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4">
            Découvrez nos formations
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-900">Les numeriques A la portee de tous</h2>
         <img src={ai} alt="Hero Image" className="w-full mt-4 rounded-md" />
          <span className="ml-2">→</span>
          <img src={ai} alt="Hero Image" className="w-full mt-4 rounded-md" />
      </div>
    </div>
  </div> */}
    <Details/>
    <Footer/>
    </>
  )
}
export default Why;