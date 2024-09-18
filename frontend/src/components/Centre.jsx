import React from 'react'
import home from "../assets/home.jpeg"
import insi from "../assets/insi.jpg"
import oppo from "../assets/oppo.jpeg"
import inno from "../assets/inno.jpeg"



const Centre = () => {
  return (
    <div className='bbc-container mx-auto pt-20'>
    <div className='text-left text-2xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-gray-400 mb-10 bg-gray-150 rounded-xl p-5'>
        <h1>
            Dans notre centre d'apprentissage en ligne, nous pensons que la connaissance et la croissance sont les clés pour libérer votre plein potentiel.
        </h1>
    </div>
    
    <div className='flex flex-col lg:flex-row pt-10 gap-10 mb-10 text-center'>
        {/* Premier Colonne */}
        <div className='flex flex-col items-center text-center '>
            <img className='w-full h-60 md:w-full md:h-60 lg:w-full lg:h-60 mb-3 rounded-xl' src={insi} alt="Inspiration" />
            <h1 className='text-gray-500 text-2xl'>Inspiration</h1>
            <p className='text-gray-500 text-xl'>Ouvrir l’avenir de l’apprentissage numérique</p>
        </div>
        
        {/* Deuxième Colonne */}
        <div className='flex flex-col items-center text-center'>
            <img className='w-full h-60  md:w-full md:h-60 lg:w-full lg:h-60  mb-3 rounded-xl' src={oppo} alt="Opportunités" />
            <h1 className='text-gray-500 text-2xl'>Opportunités</h1>
            <p className='text-gray-500 text-xl'>Renforcer votre parcours éducatif</p>
        </div>
        
        {/* Troisième Colonne */}
        <div className='flex flex-col items-center text-center'>
            <img className='w-full h-60   md:w-full md:h-60 lg:w-full lg:h-60  mb-3 rounded-xl' src={inno} alt="Innovation" />
            <h1 className='text-gray-500 text-2xl'>Innovation</h1>
            <p className='text-gray-500 text-xl'>Transformer votre façon d'apprendre</p>
        </div>
        
        {/* Quatrième Colonne */}
        <div className='flex flex-col items-center text-center'>
            <img className='w-full h-60   md:w-full md:h-60 lg:w-full lg:h-60  mb-3 rounded-xl' src={inno} alt="Exploration" />
            <h1 className='text-gray-500 text-2xl'>Exploration</h1>
            <p className='text-gray-500 text-xl'>Découvrez le potentiel illimité de notre e-learning</p>
        </div>
    </div>
</div>
  )
}

export default Centre