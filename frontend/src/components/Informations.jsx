import React from 'react'
import home from "../assets/home.jpeg"
import { Link } from 'react-router-dom'

const Informations = () => {
  return (
    <div className="container px-4 mx-auto h-screen mt-20">
      <div className="flex flex-wrap -m-8">
<div className="w-full md:w-1/2 p-8 ">
      
        
        <img className="h-screen  transform hover:-translate-y-2 transition duration-500 rounded-lg" src={home} alt />
   
        
   
    </div>
    <div className="w-1/2 p-4">
      <div className="mt-16 text-left">
     < h1 className="font-heading tracking-tight text-black text-4xl md:text-6xl font-medium max-w-md md:max-w-2xl">Une formation qui donne un avenir</h1>



<h1 className="mb-4 text-3xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">100% pratique avec des projets concrets</span> </h1>
        <ul className="mt-8 p-10 list-disc list-inside text-black text-xl font-bold">
          <li>Bootcamps sur 4 mois</li>
          <li>Temps plein de 8h-16h en ligne</li>
          <li>Developpement logiciel </li>
          <li>Machine Learning</li>
          <li>Programme entreprenariat(exclusivement au parteneur )</li>
          <li>Art numerique et Design </li>
          <li>+ étudiants</li>
          <li>7 experts</li>
        </ul>
        <h1 className='font-extrabold text-black text-xl'>Modes des payements</h1>


        <ul className="mt-5 p-10 list-disc list-inside text-black text-xl font-bold">
          <li>Payement c'est 50 Dollars (4mois de bootcamps)</li>
          <li>Nous detenons aussi 10% sur votre premier contat de travail</li>
          <li>Possible par bourses avec nos partennaires</li>
         
        </ul>
        <div className="mt-12">
          <p className="text-gray-600">Certification internationale</p>
          <h3 className="text-2xl font-bold text-blue-600">Institut francais</h3>
          <p className="text-gray-600">.org</p>
        </div>
        <button   className="mt-8 px-8 py-3 rounded-md  bg-indigo-800 text-white font-bold hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"><Link to="/register">Inscription</Link></button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Informations