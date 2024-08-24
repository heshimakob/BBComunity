import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChapterByCoursId } from '../../../store/coursSlice';

const AjouterCours = () => {
  const dispatch = useDispatch();
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [chapitres, setChapitres] = useState([]);

  const handleAjouterCours = () => {
    const cours = { titre, description, chapitres };
    dispatch(addChapterByCoursId(cours));
  };

  const handleAjouterChapitre = () => {
    const titreChapitre = prompt('Entrez le titre du chapitre');
    const descriptionChapitre = prompt('Entrez la description du chapitre');
    const chapitre = { titre: titreChapitre, description: descriptionChapitre };
    setChapitres([...chapitres, chapitre]);
  };

  return (
    <div>
      <h1>Ajouter un cours</h1>
      <form>
        <label>Titre :</label>
        <input    className="w-full p-3 mb-6  border border-gray-200 rounded-md" type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
        <br />
        <label>Description :</label>
        <textarea    className="w-full p-3 mb-6  border border-gray-200 rounded-md" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button onClick={handleAjouterChapitre}>Ajouter un chapitre</button>
        <ul>
          {chapitres.map((chapitre, index) => (
            <li key={index}>
              {chapitre.titre} - {chapitre.description}
            </li>
          ))}
        </ul>
        <button  className="bg-red-700 text-white" onClick={handleAjouterCours}>Ajouter le cours</button>
      </form>
    </div>
  );
};

export default AjouterCours;