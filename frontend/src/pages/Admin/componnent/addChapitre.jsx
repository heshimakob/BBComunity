import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importez useParams
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';

function AddChapitre() {
  const { id } = useParams(); // Utilisez useParams pour récupérer l'ID du cours
  const [idCours, setIdCours] = useState(id || ''); // Remplissez l'état avec l'ID du cours si disponible
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [lien, setLien] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/cours/addChapitreCours', {
        idCours,
        titre,
        contenu,
        lien,
      });
      console.log(response.data);
      setError(null);
    } catch (error) {
      setError(error.response.data.erreur);
    }
  };

  return (
    <>
      <NavBar/>
      <Sidebar/>
      
      <div className='container mx-auto mt-20'>
        <h1 className="text-3xl font-bold mb-4">Ajouter un chapitre</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="idCours" className="block text-sm font-bold mb-2">
              ID du cours
            </label>
            <input
              type="text"
              id="idCours"
              disabled 
              value={idCours}
              onChange={(e) => setIdCours(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="titre" className="block text-sm font-bold mb-2">
              Titre du chapitre
            </label>
            <input
              type="text"
              id="titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contenu" className="block text-sm font-bold mb-2">
              Contenu du chapitre
            </label>
            <textarea
              id="contenu"
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lien" className="block text-sm font-bold mb-2">
              Lien du chapitre
            </label>
            <input
              type="text"
              id="lien"
              value={lien}
              onChange={(e) => setLien(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-200 rounded-md"
            />
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter le chapitre
          </button>
        </form>
      </div>
    </>
  );
}

export default AddChapitre;