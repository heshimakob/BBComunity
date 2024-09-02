import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCompany } from '../store/companySlice';
import { toast } from 'react-hot-toast';
import NavBar from './NavBar';
import Footer from './Footer';
import Details from './Details';
import Marque from './marque/Marque';

const CompanySite = () => {
  const dispatch = useDispatch();
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [adresseMail, setAdresseMail] = useState('');
  const [adressePhysique, setAdressePhysique] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');
  const [motif, setMotif] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nomEntreprise,
      adresseMail,
      adressePhysique,
      numeroTelephone,
      motif,
    };
    dispatch(addCompany(data))
      .then(() => {
        toast.success('Votre demande d\'engagement a été envoyée avec succès!');
      })
      .catch((error) => {
        toast.error('Erreur lors de l\'envoi de votre demande d\'engagement');
        console.error(error);
      });
  };

  return (
    <>
      <NavBar />

      <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden">
        <div className="text-center">
          <h1 className="mb-4 text-3xl text-center font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> Agir en grand avec nous
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-auto p-2">
              <a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-blue-500 w-full rounded hover:bg-blue-400 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">S'enregistrer sur la liste d'attente</a>
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
              value={nomEntreprise}
              onChange={(e) => setNomEntreprise(e.target.value)}
              placeholder="Nom de l'entreprise"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse mail de l'entreprise*
            </label>
            <input
              type="mail"
              value={adresseMail}
              onChange={(e) => setAdresseMail(e.target.value)}
              placeholder="post@entreprise.com ou adrees@gmail.com"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse Physique de l'entreprise*
            </label>
            <input
              type="text"
              value={adressePhysique}
              onChange={(e) => setAdressePhysique(e.target.value)}
              placeholder="pays ville quartier et numero avenue"
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
              Numero de telephone*
            </label>
            <input
              type="text"
              value={numeroTelephone}
              onChange={(e) => setNumeroTelephone(e.target.value)}
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
<Details/>
    <Footer/>
    </>
  )
}
export default CompanySite;