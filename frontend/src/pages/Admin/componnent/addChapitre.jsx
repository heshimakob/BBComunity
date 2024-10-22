import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

function AddChapitre() {
    const { id } = useParams();
    const [idCours, setIdCours] = useState(id || '');
    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [lien, setLien] = useState('');
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);
    const { quill, quillRef } = useQuill();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('idCours', idCours);
        formData.append('titre', titre);
        formData.append('contenu', quill.root.innerHTML);
        formData.append('lien', lien);
        
        if (video) {
            formData.append('video', video);
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/cours/addChapitreCours/${idCours}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            swal("Ajouter!", "Chapitre ajouté au cours!", "success");
            setError(null);
        } catch (error) {
            setError(error.response ? error.response.data.erreur : 'Une erreur est survenue.');
        }
    };

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className='container mx-auto mt-20'>
                <h1 className="text-3xl font-bold mb-4">Ajouter un chapitre</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="idCours" className="block text-sm font-bold mb-2">ID du cours</label>
                        <input
                            type="text"
                            id="idCours"
                            required
                            disabled
                            value={idCours}
                            onChange={(e) => setIdCours(e.target.value)}
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="titre" className="block text-sm font-bold mb-2">Titre du chapitre</label>
                        <input
                            type="text"
                            id="titre"
                            required
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-bold mb-2">Description du chapitre</label>
                        <div style={{ width: 700, height: 500 }}>
                            <div ref={quillRef} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lien" className="block text-sm font-bold mb-2">Lien du chapitre</label>
                        <input
                            type="text"
                            id="lien"
                            required
                            value={lien}
                            onChange={(e) => setLien(e.target.value)}
                            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="video" className="block text-sm font-bold mb-2">Télécharger la vidéo</label>
                        <input
                            type="file"
                            id="video"
                            accept="video/*"
                            onChange={(e) => setVideo(e.target.files[0])}
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
                <Toaster />
            </div>
        </>
    );
}

export default AddChapitre;
