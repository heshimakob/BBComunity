import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import intersect  from "../assets/background/intersect.svg"
import { Link } from 'react-router-dom'

const Formules = () => {
  return (
    <>
    <NavBar/>
    <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: `url(${intersect})`}}>
<div className="container px-4 mx-auto">
<div className="text-center mb-16 mt-20">
<h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
<span>Start saving time today and</span>
<span className="text-blue-600">choose</span>
<span>your best plan</span>
</h2>
<p className="max-w-sm mx-auto text-lg text-blueGray-400">Best for freelance developers who need to save their time</p>
</div>
<div className="flex flex-wrap -mx-3">
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
<img className="h-20 mb-6 mx-auto" src="metis-assets/illustrations/people.png" alt />
<h3 className="mb-2 text-4xl font-bold font-heading">BootCamp</h3>
<span className="text-4xl text-blue-600 font-bold font-heading">$50</span>
<p className="mt-2 mb-8 text-blueGray-400">user per month</p>
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
<div><Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" to="/register">S'inscrire</Link><a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Purchase</a></div>
</div>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center text-white bg-blueGray-800 rounded shadow">
<img className="h-20 mb-6 mx-auto" src="metis-assets/illustrations/job-interview.png" alt />
<h3 className="mb-2 text-4xl font-bold font-heading">Entreprises</h3>
<span className="text-4xl font-bold font-heading">$500</span>
<p className="mt-2 mb-8">Pour un mois de formation</p>
<div className="flex flex-col items-center mb-8">
<ul>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>6 Emails</span>
  </li>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>30 modules</span>
  </li>
  <li className="flex items-center mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Compte illimites</span>
  </li>
  <li className="flex items-center">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Avec assitance technique par proposition</span>
  </li>
</ul>
</div>
<div><a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-600 text-center font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">Start Free Trial</a><a className="block sm:inline-block py-4 px-6 text-xs text-white text-center font-semibold leading-none border border border-blueGray-500 hover:border-blueGray-400 rounded" href="#">Purchase</a></div>
</div>
</div>
<div className="w-full lg:w-1/3 px-3 mb-6">
<div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
<img className="h-20 mb-6 mx-auto" src="metis-assets/illustrations/team-management.png" alt />
<h3 className="mb-2 text-4xl font-bold font-heading">Professional</h3>
<span className="text-4xl text-blue-600 font-bold font-heading">$62.99</span>
<p className="mt-2 mb-8 text-blueGray-400">user per month</p>
<div className="flex flex-col items-center mb-8">
<ul className="text-blueGray-400">
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>12 Emails</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>8 Datebases</span>
  </li>
  <li className="flex mb-3">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Unlimited Domains</span>
  </li>
  <li className="flex">
    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>50 GB Storage</span>
  </li>
</ul>
</div>
<div><a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Start Free Trial</a><a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">Purchase</a></div>
</div>
</div>
</div>
</div>
</section>

<Footer/>



</>
  )
}

export default Formules