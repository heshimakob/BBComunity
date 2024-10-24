import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBookOpen, FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllCours = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchTerm, setSearchTerm] = useState("");
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userData = response.data;
                console.log('User data:', userData); // Afficher les données de l'utilisateur dans la console

                if (userData && userData.role) {
                    setUserRole(userData.role);
                } else {
                    console.error("Le rôle de l'utilisateur est manquant dans la réponse");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l’utilisateur :', error);
            }
        };

        fetchUserRole();
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cours/getAllcours')
            .then(response => {
                setCourses(response.data);
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

    // Filtre des cours en fonction du rôle de l'utilisateur et de la catégorie sélectionnée
    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory;

        // Affiche tous les cours si le rôle est 'user', sinon filtre par catégorie correspondant au rôle
        const matchesRole = userRole === 'user' || (userRole !== 'user' && course.category === userRole);

        const matchesSearchTerm = course.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesRole && matchesSearchTerm;
    });

    return (
        <>
            <div className="w-full min-h-screen p-4 pt-20 border">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-md shadow-md p-6 mb-8">
                        <div className="flex items-center mb-4">
                            <FaUserCircle className="text-blue-500 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">Tous les cours disponibles</h2>
                        </div>
                        <div className="flex items-center justify-center mb-4 flex-wrap">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredCourses.map((course) => (
                                <div key={course._id} className="w-full">
                                    <Link to={`/modulePage/${course._id}`}>
                                        <div className="bg-white rounded shadow-md">
                                            <div className="px-4 py-5">
                                                <div className='flex justify-between'>
                                                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                                                        {course.name}
                                                    </h4>
                                                    <span className="bg-blue-800 text-sm text-white rounded p-2 mb-5">{course.duration} heures</span>
                                                </div>
                                                <img src={course.image} alt={course.name} className="w-full h-48 object-cover mb-2" />
                                                <div className='flex justify-between'>
                                                    <p className="text-sm text-gray-600">{course.description}</p>
                                                    <span className="bg-red-600 text-sm text-gray-300 rounded p-2">
                                                        <p className='text-white'>{course.category}</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 border-t border-gray-200">
                                                <div className="flex items-center justify-between p-1">
                                                    <FaGraduationCap className="text-blue-500 mr-3" size={24} />
                                                    <div className="relative w-16 h-16">
                                                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                                                            <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="transparent" />
                                                            <circle cx="50" cy="50" r="45" stroke="#4ade80" strokeWidth="10" fill="transparent" strokeDasharray={282.7433388230814} strokeDashoffset={course.progress ? 282.7433388230814 - (282.7433388230814 * course.progress) / 100 : 282.7433388230814} />
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
                            <a href="#" className="underline text-blue-500 hover:text-blue-700">
                                Learn more.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCours;
