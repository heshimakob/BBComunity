import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoursTable() {
  const [cours, setCours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cours/getAllcours')
      .then(response => {
        setCours(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cours disponibles</h1>
      {loading ? (
        <p className="text-gray-600">Chargement en cours...</p>
      ) : error ? (
        <p className="text-red-600">{error.message}</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Chapitre</th>
            </tr>
          </thead>
          <tbody>
            {cours.map(cours => (
              <tr key={cours._id}>
                <td className="px-4 py-2" to="">{cours.name}</td>
                <td className="px-4 py-2" to="">{cours.Chapitre && cours.Chapitre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CoursTable;