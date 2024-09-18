import React from 'react';
import home from "../assets/home.jpeg";
import { Link } from 'react-router-dom';
import learner from "../assets/learner.jpeg"

const Informations = () => {
  return (
    <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900  overflow-hidden md:h-auto sm:h-auto" style={{
      backgroundImage: `url(${learner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
    }}>
    <div className="bbc-container px-4 mx-auto mt-10 md:mt-20 mb-10">
      <div className="flex flex-wrap -m-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full h-auto transform hover:-translate-y-2 transition duration-500 rounded-lg" src={home} alt="Accueil" />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="mt-6 md:mt-16 text-left">
            <h1 className="font-heading tracking-tight text-black text-3xl md:text-4xl lg:text-6xl font-medium max-w-md">Une formation qui donne un avenir</h1>
            <h1 className="mb-4 text-2xl font-extrabold text-black md:text-3xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">100% pratique avec des projets concrets</span>
            </h1>
            <ul className="mt-8 p-4 list-disc list-inside text-black text-lg md:text-xl font-bold">
              <li>Bootcamps sur 4 mois</li>
              <li>Temps plein de 8h-16h en ligne</li>
              <li>Développement logiciel</li>
              <li>Machine Learning</li>
              <li>Programme entrepreunariat (exclusivement au partenaire)</li>
              <li>Art numérique et Design</li>
              <li>+ étudiants</li>
              <li>7 experts</li>
            </ul>
            <h1 className='font-extrabold text-black text-lg'>Modes de paiements</h1>
            <ul className="mt-5 p-4 list-disc list-inside text-black text-lg md:text-xl font-bold">
              <li>Paiement c'est 50 Dollars (4 mois de bootcamps)</li>
              <li>Nous détenons aussi 10% sur votre premier contrat de travail</li>
              <li>Possible par bourses avec nos partenaires</li>
            </ul>
            <div className="mt-8">
              <p className="text-gray-600">Certification internationale</p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-600">Institut français</h3>
              <p className="text-gray-600">.org</p>
            </div>
            <button className="mt-8 px-8 py-3 rounded-md bg-indigo-800 text-white font-bold hover:bg-indigo-600 transition duration-200">
              <Link to="/register">Inscription</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Informations;