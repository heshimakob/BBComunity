import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { FaBookOpen, FaCode, FaUserCircle } from 'react-icons/fa'; 
import Sidebar from './Sidebar'; 
import { Link } from 'react-router-dom'; 
import NavBar from '../Admin/NavBar'; 

const CoursMember = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => { 
        axios.get('http://localhost:8080/api/cours/getAllcours') 
            .then(response => { 
                setCourses(response.data); 
            }) 
            .catch(error => { 
                setError(error.message); 
            }); 
    }, []);

    const categories = ["Tous", "Software", "Machine Learning", "Design", "Entrepreneuriat"];
    
    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory;
        const matchesSearchTerm = course.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="container mx-auto w-full min-h-screen p-4 pt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center py-12 px-6">
                        <div className="md:w-[75%] w-full mb-4 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Apprentissage et développement personnel</h1>
                            <p className="text-gray-600 mb-12">
                                Gagnant du potentiel et des qualités enfin de dénicher des talents hors normes.
                            </p>
                        </div>
                        <div className="md:w-[25%] w-full">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1t9B2bcBn8RpB9T_Mpk_ixrvbUPFADIj6g&s://www.shutterstock.com/image-vector/illustration-learning-with-computer-260nw-2076016010.jpg"
                                alt="Learn" 
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-md p-6 mb-8">
                        <div className="flex items-center mb-4">
                            <FaUserCircle className="text-blue-500 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">Nos Cours</h2>
                        </div>
                        <input
                            type="text"
                            placeholder="Rechercher un cours"
                            className="border p-2 mb-4 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="flex flex-wrap justify-center mb-4">
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
                        <div className="flex flex-col md:flex-wrap md:flex-row justify-center mb-4">
                            {filteredCourses.map((course) => (
                                <div key={course._id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                                    <Link to={`/modulePage/${course._id}`}>
                                        <div className="bg-white rounded shadow-md">
                                            <div className="px-4 py-5">
                                                <div className='flex justify-between'>
                                                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                                                        {course.name}
                                                    </h4>
                                                    <span className="flex justify-between bg-blue-800 text-sm text-white rounded p-2 mb-5 text-gray-300">
                                                        <p className='text-white'>{course.duration} heures</p>
                                                    </span>
                                                </div>
                                                <img src={course.image} alt={course.name} className="w-full h-48 object-cover mb-2" />
                                                <div className='flex justify-between'>
                                                    <p className="text-sm text-gray-600">{course.description}</p>
                                                    <span className="flex justify-between bg-red-600 text-sm text-gray-300 rounded p-2">
                                                        <p className='text-white'>{course.category}</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 border-t border-gray-200">
                                                <div className="flex items-center justify-between">
                                                    <FaCode className="text-blue-500 mr-3" size={24} />
                                                    <div className="relative w-16 h-16">
                                                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="transparent" />
                                                            <circle cx="50" cy="50" r="45" stroke="#4ade80" strokeWidth="10" fill="transparent" strokeDasharray={282.7433388230814} strokeDashoffset={282.7433388230814 - (282.7433388230814 * course.progress) / 100} />
                                                        </svg>
                                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                                                            {course.progress}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-md p-6 mb-20">
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
        </>
    )
}

export default CoursMember;