// src/Modal.jsx
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('category', category);
    formData.append('image', image);
    onSubmit(formData);
    onClose(); // Ferme le modal
  };

  if (!isOpen) return null;

  return (
    <div className="   fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96  h-1/2 bg-white rounded-lg p-10 mt-10">
        <h2 className="text-lg font-bold mb-4">Ajouter un Cours</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block mb-5 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block mb-5 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Durée"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="block mb-5 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="block mb-5 p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="block mb-5"
          />
         <div className='flex justify-between mt-10'>
         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Ajouter
          </button>
          <button type="button" onClick={onClose} className="mt-2 text-gray-600">
            Annuler
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;