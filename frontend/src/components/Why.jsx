import React, { useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import equipe from "../assets/equipe.webp"
import ai from "../assets/ai.jpg"
import Informations from './Informations';

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


    <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden' >
      <div className='text-center'>

    <h1 className="mb-4 text-3xl  text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Pourquoi Black born community?</span></h1>
    <div className=" bbc-container  flex justify-center items-center">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="/company">Hire Talent Now</a></div>
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
    <Informations/>



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
  </div>
    <Details/>
    <Footer/>
    </>
  )
}
export default Why;