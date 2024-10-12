import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCompany, addCompanyToDB } from '../store/companySlice';
import toast,{Toaster} from 'react-hot-toast';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import Marque from './marque/Marque';
import swal from 'sweetalert';
import Cours from './Cours';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const CompanySite = ({setProgress}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [numero, setNumero] = useState('');
  const [motif, setMotif] = useState('');


  const resetForm = () => {
    setName('');
    setEmail('');
    setAdress('');
    setNumero('');
    setMotif('');
  };
  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
        setProgress(100)
    },3000)
},[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      adress,
      numero,
      motif,
    };
    dispatch(addCompanyToDB(data))
      .then(() => {
        // toast.success('Votre demande d\'engagement a été envoyée avec succès!');
        swal("Submitted!", "envoyer A bbc community", "success");
        resetForm();
      })
      .catch((error) => {
        toast.error('Erreur lors de l\'envoi de votre demande d\'engagement');
        console.error(error);
      });
  };


  return (
    <>
      <NavBar />

      <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=450&q=80&blend=1e293b&sat=30&blend-mode=multiply")'}}>
        <div className="text-center mt-5">
        <motion.h1
                        className="inline-block mb-5 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full mt-16"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        👋 Ce que nous offons pour les entreprises?
                    </motion.h1>
          <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> Des excellent(e)s candidat(e)s
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-auto p-2">
              <Link className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-blue-500 w-full rounded hover:bg-blue-400 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" to="/register">S'enregistrer sur la liste d'attente</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-10">Engager maintenant n'importe où</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Nom de l'entreprise*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nom de l'entreprise"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse mail de l'entreprise*
            </label>
            <input
              type="mail"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="post@entreprise.com ou adrees@gmail.com"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse Physique de l'entreprise*
            </label>
            <input
              type="text"
              value={adress}
              required
              onChange={(e) => setAdress(e.target.value)}
              placeholder="pays ville quartier et numero avenue"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Numero de telephone*
            </label>
            <input
              type="text"
              value={numero}
              required
              onChange={(e) => setNumero(e.target.value)}
              placeholder="auteur"
              className="w-full p-3 mb-6 border border-gray-200 rounded"/>
      <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Motif ou message*
            </label>
            <textarea
              value={motif}
              onChange={(e) => setMotif(e.target.value)}
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
{/* <Cours/> */}
<Details/>
<Toaster/>
    <Footer/>
    </>
  )
}
export default CompanySite;