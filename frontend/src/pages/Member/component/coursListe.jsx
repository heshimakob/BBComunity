import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoursList() {
  const [cours, setCours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cours/getAllcours')
      .then(response => {
        setCours(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des cours</h1>
      {error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        <ul>
          {cours.map(cours => (
            <li key={cours._id} className="mb-4">
              <h2 className="text-2xl font-bold">{cours.name}</h2>
              <p>{cours.description}</p>
              <ul>
                {cours.chapitres.map(chapitre => (
                  <li key={chapitre._id}>{chapitre.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoursList;