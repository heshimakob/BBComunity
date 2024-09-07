import React, { useState } from 'react';
import axios from 'axios';

function AjouterCours() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/cours/addCours', {
        name,
        description,
        image,
      });
      console.log(response.data);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div >
      <h1 className="text-3xl font-bold mb-4">Ajouter un cours</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-bold mb-2"
          >
            Nom du cours
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-bold mb-2"
          >
            Description du cours
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-6 border border-gray-200 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-bold mb-2"
          >
            Image du cours
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
          Ajouter le cours
        </button>
      </form>

      
    </div>



  );
}

export default AjouterCours;