import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { addBlogToDB } from '../../store/blogSlice';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import NavBar from './NavBar';

const Blog = () => {
    const [auteur, setAuteur] = useState('');
    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [image, setImage] = useState(null);
    const [categorie, setCategorie] = useState(''); // État pour la catégorie
    const { quill, quillRef } = useQuill();

    const dispatch = useDispatch();

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = {
            titre: titre,
            auteur: auteur,
            contenu: quill.root.innerHTML,
            image: image, // Image est désormais une chaîne encodée en Base64
            categorie: categorie,
        };

        dispatch(addBlogToDB(formData)); // Passez l'objet formData au lieu de FormData
    };

    const handleImageChange = (e) => {
      if (e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          
          reader.onloadend = () => {
              const base64String = reader.result;
              if (typeof base64String === 'string' && base64String.startsWith('data:image')) {
                  setImage(base64String); // Stocker l'image encodée en Base64
              } else {
                  console.error('L\'image n\'a pas été correctement convertie en Base64');
              }
          };
          
          reader.readAsDataURL(file); // Lire le fichier comme une URL de données
      } else {
          console.error('Aucune image sélectionnée'); 
      }
  };

    return (
        <>
            <div className='container mx-auto'>
                <div className="h-screen w-1/3 p-10 mt-20">
                    <h1 className="text-2xl mb-10">Ajouter un Post</h1>
                    <form onSubmit={registerHandler}>
                        <label htmlFor="titre" className="block text-gray-700 text-sm font-bold mb-2">
                            Ajouter un titre*
                        </label>
                        <input
                            type="text"
                            placeholder="titre"
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)} // Met à jour le titre
                        />
                        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                            Ajouter une image*
                        </label>
                        <input
                            type="file"
                            accept=".jpeg, .png, .jpg"
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            onChange={handleImageChange} // Met à jour l'image
                        />
                        <label htmlFor="auteur" className="block text-gray-700 text-sm font-bold mb-2">
                            Nom auteur du post*
                        </label>
                        <input
                            type="text"
                            placeholder="auteur"
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            value={auteur}
                            onChange={(e) => setAuteur(e.target.value)} // Met à jour l'auteur
                        />
                        <label htmlFor="categorie" className="block text-gray-700 text-sm font-bold mb-2">
                            Category*
                        </label>
                        <select
                            id="categorie"
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            value={categorie} // Ajoute une valeur pour le select
                            onChange={(e) => setCategorie(e.target.value)} // Met à jour la catégorie
                        >
                            <option value="">Choisir une catégorie</option>
                            <option value="software_development">Software Development</option>
                            <option value="machine_learning">Machine Learning</option>
                            <option value="design">Design</option>
                            <option value="entreprenariat">Entreprenariat</option>
                        </select>
                        <label htmlFor="contenu" className="block text-gray-700 text-sm font-bold mb-2">
                            Le contenu du post*
                        </label>
                        <div style={{ width: 700, height: 500 }}>
                            <div ref={quillRef} />
                        </div>
                        <div className='mt-20'>
                            <button
                                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Ajouter un post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <NavBar />
            <Sidebar />
        </>
    );
}

export default Blog;