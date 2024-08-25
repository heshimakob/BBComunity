import React, { useState } from 'react';
import axios from 'axios';

function AddChapitre() {
  const [idCours, setIdCours] = useState('');
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
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Ajouter un chapitre</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="idCours"
            className="block text-sm font-bold mb-2"
          >
            ID du cours
          </label>
          <input
            type="text"
            id="idCours"
            value={idCours}
            onChange={(e) => setIdCours(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="titre"
            className="block text-sm font-bold mb-2"
          >
            Titre du chapitre
          </label>
          <input
            type="text"
            id="titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contenu"
            className="block text-sm font-bold mb-2"
          >
            Contenu du chapitre
          </label>
          <textarea
            id="contenu"
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lien"
            className="block text-sm font-bold mb-2"
          >
            Lien du chapitre
          </label>
          <input
            type="text"
            id="lien"
            value={lien}
            onChange={(e) => setLien(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
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
  );
}

export default AddChapitre;