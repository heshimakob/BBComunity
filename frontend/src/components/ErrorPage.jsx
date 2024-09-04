import React from 'react'
import notfound from "../assets/notfound.png"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
  <div className='container mx-auto flex  flex-col justify-center items-center'>
    <img src={notfound}/>
    <button   className="mt-8 px-8 py-3 rounded-md  bg-indigo-800 text-white font-bold hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"><Link to="/">Retour sur acceuil</Link></button>
  </div>
    </>
  )
}

export default ErrorPage