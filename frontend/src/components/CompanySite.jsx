import React, { useRef } from 'react'
import {useSelector} from 'react-redux'
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import Marque from './marque/Marque';

const  CompanySite =()=>{
  const form=useRef();
  const company = useSelector((state)=>state.companyReducer)
  const handleForm= async(e)=>{
    e.preventDefault();
    console.log(form)

    const postData={
      nom:company.name,
      email:company.email,
      numero:company.numero,
      adresse:company.adresse,
      message:company.message,
    


    }
    dispatchEvent(addCompany(postData))
    form.current.reset();
  }
  return (
    <>
    <NavBar/>

    <div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden'>
      <div className='text-center'>

    <h1 className="mb-4 text-3xl  text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> Agir en grand avec nous </h1>
    <div className=" flex justify-center items-center">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-blue-500 w-full rounded hover:bg-blue-400 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">S'enregistrer sur la liste d'attente </a></div>
  {/* <div className="w-auto p-2">
    <a className="inline-flex items-center px-5 py-4 bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-indigo-800 border border-gray-800 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
      <div className="inline-block">
        <svg className="mr-2.5" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-gray-100 font-semibold tracking-tight">Make a donation</span>
    </a>
  </div> */}
</div>
    </div>
    </div>




    <div className=" container mx-auto px-4 pt-10">
        
        <div className="mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-10">Engager maintenant n'importe Ou </h1>
        <form  > 

<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
  Nom de l'entreprise* 
</label>
<input
type="text"
placeholder="Nom de l'entreprise"
className="w-full p-3 mb-6 border border-gray-200 rounded-md"
/>
<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
  Adresse mail de l'entreprise* 
</label>
<input
type="mail"
placeholder="post@entreprise.com ou adrees@gmail.com"
className="w-full p-3 mb-6 border border-gray-200 rounded-md"
/>
<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
  Adresse Physique de l'entreprise* 
</label>
<input
type="text"
placeholder="pays ville  quartier et numero avenue"
className="w-full p-3 mb-6 border border-gray-200 rounded-md"
/>
<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
  Auteur evenenement*
</label>
<input
type="text"
placeholder="auteur"
className="w-full p-3 mb-6  border border-gray-200 rounded-md"
/>
<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
  Description evenement*
</label>


<textarea
placeholder="Description du post"
className="w-full p-3 mb-6  border border-gray-200 rounded-md resize-none h-80"
></textarea>
<button
className="bg-blue-500 w-full rounded hover:bg-blue-400 text-white font-bold py-2 px-4"
type="submit" 
>
Envoyer votre demande d'engagement
</button>
</form>
        </div>
      </div>

<Marque/>
<Details/>
    <Footer/>
    </>
  )
}
export default CompanySite;