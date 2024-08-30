import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Loading from '../../../components/Loading';

const ModulePage = () => {
  const { id } = useParams(); // Retrieve course ID from URL
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/cours/${id}/chapitres`);
        setChapters(response.data.chapitres);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, [id]);

  if (loading) {
    return <>
    <Loading/>
    </>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chapitres du cours</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter._id} className="py-2 border-b border-gray-200">
            <h3 className="text-lg font-bold">{chapter.titre}</h3>
            <p>{chapter.contenu}</p>
            <a href={chapter.lien} target="_blank" rel="noopener noreferrer">
              Lien
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModulePage;