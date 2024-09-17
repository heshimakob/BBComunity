import React from 'react'
import home from "../assets/home.jpeg"
import insi from "../assets/insi.jpg"
import oppo from "../assets/oppo.jpeg"
import inno from "../assets/inno.jpeg"



const Centre = () => {
  return (
   <div className='container mx-auto pt-20'>
      <div className='text-center text-5xl font-bold text-gray-400 mb-10 bg-gray-150 rounded-xl '> <h1> Dans notre centre d'apprentissage en ligne, nous pensons que la connaissance et la croissance sont les clés pour libérer votre plein potentiel. </h1></div>
    <div className=' flex flex-row pt-10 gap-2 mb-10'>  
    <div className='flex-col text-center'>
        <img className='w-100 h-100' src={insi} alt="" />
        <h1 className='text-gray-500 text-xl'>
            Inspiration
        </h1>
        <p>Ouvrir l’avenir de l’apprentissage numérique</p>

    </div>
    <div className='flex-col text-center'>
    <img src={oppo} alt="" />
    <h1 className='text-gray-500 text-xl'>
            Opportinites
        </h1>
        <p>Renforcer votre parcours éducatif</p>

    </div>
    <div className='flex-col text-center'>
    <img  className='w-100 h-100' src={inno} alt="" />
    <h1 className='text-gray-500 text-xl'>
            Innovation
        </h1>
        <p>Transformer votre façon d'apprendre</p>

    </div>
    <div className='flex-col text-center'>
    <img src={inno} alt="" />
    <h1 className='text-gray-500 text-xl'>
            Exploration
        </h1>

    </div>
     </div>
   </div>
  )
}

export default Centre