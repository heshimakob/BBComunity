import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import NavBar from './NavBar';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import BlogTable from './componnent/BlogTable';


const Blog = () => {
    const [auteur, setAuteur] = useState('');
    const [titre, setTitre] = useState('');
    const [description, setescription] = useState('');
    const [image, setImage] = useState(null);
    const [categorie, setCategorie] = useState(''); // État pour la catégorie
    const { quill, quillRef } = useQuill();

    const registerHandler = async (e) => {
        e.preventDefault();
        
        // Créer un nouvel objet FormData
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('auteur', auteur);
        formData.append('description', quill.root.innerHTML); // Envoie le contenu du post
        formData.append('category', categorie);
        
        // Si une image est sélectionnée, ajoutez-la au FormData
        if (image) {
            formData.append('image', image);
        }

        try {
            // Envoyer à votre API Express
            const response = await axios.post('http://localhost:8080/api/blogs/addBlog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            toast.success('Vous avez ajoutez  un blog avec succès!');
            // Vous pouvez également gérer les messages de succès ou réinitialiser le formulaire ici
        } catch (error) {
            toast.error('echec enregistrement');
            console.error('Erreur lors de l\'ajout du post :', error);
            // Gérer l'erreur si nécessaire
        }
    };

    return (
        <>
            <div className='container mx-auto'>
                <div className="min-h-max w-1/3 p-10 mt-20">
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
    name="image"  // Ajoutez ce champ name
    accept=".jpeg, .png, .jpg"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
    onChange={(e) => setImage(e.target.files[0])} // Met à jour l'image
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
                            value={categorie}
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
                <BlogTable/>
                <Toaster/>
            </div>
            <NavBar />
            <Sidebar />
        </>
    );
}

export default Blog;