import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';

const ModulePage = () => {
  const { courseId } = useParams();
  const [cours, setCours] = useState({});
  const [chapitres, setChapitres] = useState([]);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/cours/getCours/${courseId}`); // courseId avec minuscule
        const data = response.data;
        console.log(data)
        setCours(data);
        setChapitres(data.chapitres);
      } catch (error) {
        setErreur(error.message);
      }
    };
    fetchCours();
  }, [courseId]);

  return (
    <div className="container mx-auto p-4">
      <Sidebar />
      {erreur ? (
        <div className="alert alert-error">{erreur}</div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">{cours.name}</h1>
          <div className="flex flex-wrap -mx-4">
            {chapitres.map((chapitre, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
                <h3 className="text-lg font-bold mb-2">{chapitre.titre}</h3>
                <div className="text-gray-600">{chapitre.contenu}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default ModulePage;