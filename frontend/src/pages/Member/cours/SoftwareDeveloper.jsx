import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBookOpen, FaCode, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

const SoftwareDeveloper = () => {


      const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cours/getAllcours')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);
  return (
    <div>
      <NavBar/>
      <Sidebar/>
          <div className="bg-white min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center py-12 px-6">
                <div className="w-2/3">
                  <h1 className="text-4xl font-bold text-gray-800 mb-6">Apprentissage de developpemnt logiciel</h1>
                  <p className="text-gray-600 mb-12">
                    Gagnant du potentiel et des qualites vous produire de logicel hors normes.
                  </p>
                </div>
                <div className="w-1/2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1t9B2bcBn8RpB9T_Mpk_ixrvbUPFADIj6g&s://www.shutterstock.com/image-vector/illustration-learning-with-computer-260nw-2076016010.jpg"
                    alt="Learn"
                    className="w-1/2"
                  />
                </div>
              </div>

              <div className="bg-white rounded-md shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FaUserCircle className="text-blue-500 mr-2" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">Nos Cours </h2>
                </div>



             
             
                <div className="border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">Active</h3>
                  {courses.map((course) => (
                    <div
                      key={course._id}
                      className="flex items-center justify-between py-4 border-b border-gray-200"
                    >
                      <div className="flex items-center">
                        <FaCode className="text-blue-500 mr-3" size={24} />
                        <div>
                        <Link to={`/modulePage/${course._id}`}>
                          <h4 className="text-base font-bold text-gray-800">
                            {course.name}
                          </h4>
                          </Link>
                          <p className="text-sm text-gray-600">{course.description}</p>
                        </div>
                      </div>
                      <div className="relative w-16 h-16">
                        <svg
                          className="absolute top-0 left-0 w-full h-full"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#e2e8f0"
                            strokeWidth="10"
                            fill="transparent"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#4ade80"
                            strokeWidth="10"
                            fill="transparent"
                            strokeDasharray={282.7433388230814}
                            strokeDashoffset={282.7433388230814 - (282.7433388230814 * course.progress) / 100}
                          />
                        </svg>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

           






              </div>

              <div className="bg-white rounded-md shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-blue-500 mr-2" size={24} />
                  <h2 className="text-xl font-bold text-gray-800">Courses</h2>
                </div>
                <p className="text-gray-600">
                  We pare down complex topics to their key practical components, so you
                  gain usable skills in a few hours (instead of weeks or months). The
                  courses are provided at no cost to you and you can now earn
            certificates.{' '}
            <a
              href="#"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default SoftwareDeveloper
