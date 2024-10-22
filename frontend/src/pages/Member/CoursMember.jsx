import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import { FaBookOpen, FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import Loading from '../../components/Loading';

const CoursMember = () => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchTerm, setSearchTerm] = useState("");
    const [progressData, setProgressData] = useState({});

    const categories = [
        "Tous",
        "Software Development",
        "Network",
        "Machine Learning",
        "Entreprenariat",
        "Design",
        "Art numérique et AR, VR et Design"
    ];

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const userData = response.data;
                if (userData._id) {
                    setUserId(userData._id);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l’utilisateur :', error);
            }
        };

        fetchUserDetails();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/cours/getAllcours');
                setCourses(response.data);
                await getProgress(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des cours :', error);
            }
        };

        fetchCourses();
    }, []);

    const getProgress = async (courses) => {
        try {
            const progress = {};
            for (const course of courses) {
                const response = await axios.get(`http://localhost:8080/api/progress/getProgress?cours=${course._id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                progress[course._id] = response.data.chapitres.length;
            }
            setProgressData(progress);
        } catch (error) {
            console.error("Erreur lors de la récupération de la progression:", error.response ? error.response.data : error.message);
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory;
        const matchesSearchTerm = course.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });
    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <NavBar />
            <Sidebar />

            <div className="w-full min-h-screen p-4 pt-20 border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center py-12 px-6">
                        <div className="md:w-[75%] w-full mb-4 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Apprentissage et développement personnel</h1>
                            <p className="text-gray-600 mb-12">
                                Gagnant du potentiel et des qualités afin de dénicher des talents hors normes.
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
                        {filteredCourses.map((course) => {
            const completedChapters = progressData[course._id] || 0;

            // Vérifiez si course.chapters est défini
            const totalChapters = course.chapters ? course.chapters.length : 0; // Définit 0 si chapters est undefined
            const progressPercentage = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0; // Évite la division par zéro

            return (
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
                                            <circle cx="50" cy="50" r="45" stroke="#4ade80" strokeWidth="10" fill="transparent" strokeDasharray={282.7433388230814} strokeDashoffset={282.7433388230814 - (progressPercentage / 100) * 282.7433388230814} />
                                        </svg>
                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                                            {progressPercentage.toFixed(0)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursMember;
