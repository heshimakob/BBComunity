import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import intersect  from "../assets/background/intersect.svg"
import { Link } from 'react-router-dom'
import people from "../assets/illustration/people.png"
import job from "../assets/illustration/job-interview.png"
import team from "../assets/illustration/team-management.png"
import Actions from './Actions'
import Details from './Details'
import { FaChevronRight } from 'react-icons/fa'
import Marque from './marque/Marque'

const Formules = ({setProgress}) => {
  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
        setProgress(100)
    },2000)
},[]);
  return (
    <>
    <NavBar/>
    <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: `url(${intersect})`}}>
<div className="container px-4 mx-auto space-x-2">
<div className="flex justify-center items-center space-x-2 mb-4">
                                    <span className="text-blue-500">{window.location.hostname}</span>
                                    <FaChevronRight className="text-blue-400" />
                                    <span className="text-blue-500">Nos formations et prix</span>
                                   
                                    {/* <span className="text-white">{Blog.titre}</span> */}
                                </div>



<div className="text-center mb-16 mt-20">
<h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
<span>Commencez à optimiser votre temps dès aujourd'hui  </span>
<span className="text-blue-600">et
découvrez nos  </span>
<span>formations adaptées à vos besoins !</span>
</h2>
<p className="max-w-sm mx-auto text-lg text-blueGray-400">Conçu pour les apprenants de tous niveaux, offrant des programmes en ligne et des options personnalisées.</p>
</div>



<div className="flex flex-wrap -mx-3">
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
<img className="h-20 mb-6 mx-auto" src={people} alt />
<h3 className="mb-2 text-4xl font-bold font-heading">BootCamp en ligne</h3>
<span className="text-4xl text-blue-600 font-bold font-heading">$50 (un seul domaine)</span>
   <span className="text-4xl text-blue-600 font-bold font-heading">$80 (Tous les domaine)</span>
<p className="mt-2 mb-8 text-blueGray-400">Sur 4 mois de bootcamp</p>
<div className="flex flex-col items-center mb-8">
<ul className="text-blueGray-400">
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>4 mois</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>15 projets </span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>4h A 7heures de travail par jours </span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Assistance 24/24 heures</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>10% sur le premier contrat</span>
  </li>
  {/* <li className="flex">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>10 GB Storage</span>
  </li> */}
</ul>
</div>
<div><Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" to="/register">S'inscrire</Link></div>
</div>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center text-white bg-blueGray-800 rounded shadow">
<img className="h-20 mb-6 mx-auto" src={job} alt />
<h3 className="mb-2 text-4xl font-bold font-heading">Bootcamp sur site</h3>
<span className="text-4xl font-bold font-heading">$312.5</span>
<p className="mt-2 mb-8">Sur 3 mois de bootcamp</p>
<div className="flex flex-col items-center mb-8">
<ul>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Une connexion wifi</span>
  </li>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>2 heure de formation(8h-10h, 16-18h)</span>
  </li>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Un espace de travail de haute qualite</span>
  </li>
  <li className="flex items-center">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Avec assitance technique</span>
  </li>
  

</ul>
</div>
<div><a
    className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-600 text-center font-semibold leading-none bg-white hover:bg-blueGray-50 rounded"
    href="mailto:inscription@bbcommunity.academy"
>
    inscription@bbcommunity.academy
</a></div>
</div>
</div>
<div className="w-full lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
<img className="h-20 mb-6 mx-auto" src={team} alt />
<h3 className="mb-2 text-4xl font-bold font-heading">Programme de bootCamp sur mesure</h3>
<span className="text-4xl text-blue-600 font-bold font-heading">$437.5</span>
<p className="mt-2 mb-8 text-blueGray-400">Sur 2 mois de bootcamp</p>
<div className="flex flex-col items-center mb-8">
<ul className="text-blueGray-400">
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Choix de l'heure de la formation</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>2 heures de formation par jours</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Espace de travail et cafe offert</span>
  </li>
  <li className="flex">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Assistance technique </span>
  </li>
</ul>
</div>
<div><a
    className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
    href="mailto:inscription@bbcommunity.academy"
>
    inscription@bbcommunity.academy
</a></div>
</div>
</div>
</div>
</div>
</section>
<Marque/>
<Actions/>
<Details/>

<Footer/>



</>
  )
}

export default Formules