import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cours = () => {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cours/getLast');
        setCours(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bbc-container mx-auto px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cours.map((course) => (
          <div key={course._id} className="bg-white shadow-md rounded-lg overflow-hidden">
               <Link to={`/modulePage/${course._id}`}>
             <div className='flex justify-between'>
                                                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                                                        {course.name}
                                                    </h4>
                                                    <span className="flex justify-between bg-blue-800 text-sm text-white rounded p-2 mb-5 text-gray-300">
                                                        <p className='text-white'>{course.duration} heures</p>
                                                    </span>
                                                </div>
            <img className="w-full h-40 object-cover" src={course.image} alt={course.title} />
            <div className="p-4">
              <h5 className="text-lg font-bold mb-2">{course.title}</h5>

            </div>
            <div className='flex justify-between'>
                              <p className="text-sm text-gray-600">{course.description}</p>
                                                    <span className="flex justify-between bg-red-600 text-sm text-gray-300 rounded p-2">
                                                        <p className='text-white'>{course.category}</p>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <FaGraduationCap className="text-blue-500 mr-3" size={24} />
                                                    {/* <div className="relative w-16 h-16">
                                                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="transparent" />
                                                            <circle cx="50" cy="50" r="45" stroke="#4ade80" strokeWidth="10" fill="transparent" strokeDasharray={282.7433388230814} strokeDashoffset={282.7433388230814 - (282.7433388230814 * course.progress) / 100} />
                                                        </svg>
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                                                            {course.progress}%
                                                        </span>
                                                    </div> */}
                                                </div>
                                                </Link>
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default Cours;