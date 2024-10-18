import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoursList() {
  const [cours, setCours] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    axios.get('http://localhost:8080/api/cours/getAllcours')
      .then(response => {
        setCours(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const categories = [
    "Tous",
    "Software Development",
    "Network",
    "Machine Learning",
    "Entreprenariat",
    "Art numérique et AR, VR et Design"
  ];

  const filteredCourses = cours.filter(course => 
    selectedCategory === 'Tous' || course.category === selectedCategory
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des cours</h1>
      {error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        <>
          <div className="mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mx-2 px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <ul>
            {filteredCourses.map(course => (
              <li key={course._id} className="mb-4">
                <h2 className="text-2xl font-bold">{course.name}</h2>
                <p>{course.description}</p>
                <ul>
                  {course.chapitres.map(chapitre => (
                    <li key={chapitre._id}>{chapitre.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CoursList;
